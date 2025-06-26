<?php

namespace App\Filament\Vendor\Resources;

use App\Enums\OrderStatusEnum;
use App\Filament\Vendor\Resources\OrderResource\Pages;
use App\Filament\Vendor\Resources\OrderResource\RelationManagers;
use App\Models\Order;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Stripe\Collection;

class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $navigationIcon = 'heroicon-o-shopping-bag';

    protected static ?string $navigationGroup = 'Sales';

    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('status')
                    ->options(OrderStatusEnum::labels())
                    ->required(),
                Forms\Components\TextInput::make('total_price')
                    ->numeric()
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->defaultSort('created_at', 'desc')
            ->deferLoading()
            ->paginationPageOptions([10, 25, 50, 100])
            ->defaultPaginationPageOption(25)

            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->label('Order #')
                    ->sortable(),
                Tables\Columns\TextColumn::make('user.name')
                    ->label('Customer')
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Order Date')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('total_price')
                    ->label('Total')
                    ->formatStateUsing(fn ($state) => number_format($state, 0, '.', ',') . ' YER')
                    ->sortable(),
                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->formatStateUsing(fn (string $state): string => __(ucfirst($state)))
                    ->color(fn (string $state): string => match ($state) {
                        OrderStatusEnum::Draft->value => 'gray',
                        OrderStatusEnum::Paid->value => 'info',
                        OrderStatusEnum::Shipped->value => 'warning',
                        OrderStatusEnum::Delivered->value => 'success',
                        OrderStatusEnum::Cancelled->value => 'danger',
                        default => 'gray',
                    }),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->multiple()
                    ->options(OrderStatusEnum::labels())
                    ->label('Order Status'),
                Tables\Filters\Filter::make('created_at')
                    ->form([
                        Forms\Components\DatePicker::make('created_from'),
                        Forms\Components\DatePicker::make('created_until'),
                    ])
                    ->query(function (Builder $query, array $data): Builder {
                        return $query
                            ->when(
                                $data['created_from'],
                                fn (Builder $query, $date): Builder => $query->whereDate('created_at', '>=', $date),
                            )
                            ->when(
                                $data['created_until'],
                                fn (Builder $query, $date): Builder => $query->whereDate('created_at', '<=', $date),
                            );
                    })
            ])
            ->actions([
                Tables\Actions\Action::make('updateStatus')
                    ->label('Update Status')
                    ->icon('heroicon-o-pencil')
                    ->form([
                        Forms\Components\Select::make('status')
                            ->options(OrderStatusEnum::labels())
                            ->required()
                            ->default(fn (Order $record) => $record->status),
                    ])
                    ->action(function (Order $record, array $data): void {
                        $record->update(['status' => $data['status']]);

                        Notification::make()
                            ->title('Status updated successfully')
                            ->success()
                            ->send();
                    })
                    ->visible(fn (Order $record): bool => $record->status !== OrderStatusEnum::Cancelled->value),

                Tables\Actions\Action::make('cancel')
                    ->label('Cancel Order')
                    ->icon('heroicon-o-x-circle')
                    ->color('danger')
                    ->requiresConfirmation()
                    ->action(function (Order $record): void {
                        $record->update([
                            'status' => OrderStatusEnum::Cancelled->value,
                            'cancelled_at' => now()
                        ]);

                        Notification::make()
                            ->title('Order has been cancelled')
                            ->success()
                            ->send();
                    })
                    ->visible(fn (Order $record): bool => $record->status !== OrderStatusEnum::Cancelled->value),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\BulkAction::make('updateStatus')
                        ->icon('heroicon-o-arrow-path')
                        ->label('Update Status')
                        ->form([
                            Forms\Components\Select::make('status')
                                ->label('Status')
                                ->options(OrderStatusEnum::labels())
                                ->required(),
                        ])
                        ->action(function (Collection $records, array $data): void {
                            $records->each->update(['status' => $data['status']]);

                            Notification::make()
                                ->title('Selected orders status updated')
                                ->success()
                                ->send();
                        }),

                    Tables\Actions\BulkAction::make('export')
                        ->label('Export Selected')
                        ->icon('heroicon-o-arrow-down-tray')
                        ->action(function (Collection $records) {
                            return response()->streamDownload(function () use ($records) {
                                echo $records->toJson();
                            }, 'orders-export-' . now()->format('Y-m-d') . '.json');
                        }),

                    Tables\Actions\DeleteBulkAction::make()
                        ->requiresConfirmation()
                        ->action(function () {
                            Notification::make()
                                ->title('Selected orders deleted')
                                ->success()
                                ->send();
                        }),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            RelationManagers\OrderItemsRelationManager::class,
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('vendor_user_id', auth()->id())
            ->with(['user', 'orderItems.product'])
            ->latest();
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOrders::route('/'),
            'create' => Pages\CreateOrder::route('/create'),
            'edit' => Pages\EditOrder::route('/{record}/edit'),
        ];
    }
}

<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TenantResource\Pages;
use App\Filament\Resources\TenantResource\RelationManagers;
use App\Models\Tenant;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Concerns\Translatable;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\BooleanColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use phpDocumentor\Reflection\Types\Boolean;

class TenantResource extends Resource
{
    protected static ?string $model = Tenant::class;

    protected static ?string $navigationLabel = 'Stores';

    protected static ?string $label = 'Store';

    protected static ?string $slug = 'stores';

    protected static ?string $pluralLabel = 'Stores';

    protected static ?string $navigationIcon = 'heroicon-o-building-storefront';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make()->schema([
                    Forms\Components\Grid::make()->schema([
                        Forms\Components\Toggle::make('isActive')->label('Is Active'),
                        Forms\Components\TextInput::make('name')
                            ->placeholder('Ex: superShoes')
                            ->required(),
                        Forms\Components\TextInput::make('email')
                            ->email()
                            ->placeholder('Ex: supershoes@example.test')
                            ->required(),
                        Forms\Components\TextInput::make('password')
                            ->password()
                            ->placeholder('Ex: password')
                            ->required(),
                        Forms\Components\TextInput::make('domain')
                            ->prefix('https://')
                            ->placeholder('Ex: superShoes')
                            ->postfix('.dukkan.test')
                            ->required(),
                        Forms\Components\FileUpload::make('logo')
                            ->image()
                            ->imageEditor()
                            ->imageEditorViewportWidth('1080')
                            ->imageEditorViewportHeight('1080')
                            ->minSize(5)
                            ->maxSize(2048),
                        Forms\Components\Textarea::make('description')
                            ->placeholder('Ex: we are a small shoes store ...')
                            ->columnSpanFull(),
                    ]),
                ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->label('ID')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('email')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\BooleanColumn::make('isActive')
                    ->label('Active')
                    ->sortable(),
                    Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),

            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTenants::route('/'),
            'create' => Pages\CreateTenant::route('/create'),
            'edit' => Pages\EditTenant::route('/{record}/edit'),
        ];
    }
}

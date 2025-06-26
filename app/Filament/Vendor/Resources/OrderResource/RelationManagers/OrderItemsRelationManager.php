<?php

namespace App\Filament\Vendor\Resources\OrderResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class OrderItemsRelationManager extends RelationManager
{
    protected static string $relationship = 'orderItems';

    protected static ?string $recordTitleAttribute = 'id';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('product.title')
                    ->label('Product')
                    ->disabled(),
                Forms\Components\TextInput::make('quantity')
                    ->numeric()
                    ->disabled(),
                Forms\Components\TextInput::make('price')
                    ->numeric()
                    ->suffix(' YER')
                    ->disabled(),
                Forms\Components\KeyValue::make('variation_type_option_ids')
                    ->label('Variation Options')
                    ->keyLabel('Option')
                    ->valueLabel('Value')
                    ->disabled(),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('id')
            ->columns([
                Tables\Columns\TextColumn::make('product.title')
                    ->label('Product')
                    ->searchable(),
                Tables\Columns\TextColumn::make('quantity')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('price')
                    ->formatStateUsing(fn ($state) => number_format($state, 0, '.', ',') . ' YER')
                    ->sortable(),
                Tables\Columns\TextColumn::make('variation_type_option_ids')
                    ->label('Variations')
                    ->formatStateUsing(fn ($state) => $state ? implode(', ', $state) : 'None'),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                //
            ])
            ->actions([
                //
            ])
            ->bulkActions([
                //
            ]);
    }

    protected function canCreate(): bool
    {
        return false;
    }

    protected function canEdit(Model $record): bool
    {
        return false;
    }

    protected function canDelete(Model $record): bool
    {
        return false;
    }
}

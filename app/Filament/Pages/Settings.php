<?php

namespace App\Filament\Pages;

use App\Livewire\SubscriptionInformationWidget;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Pages\Page;

class Settings extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-adjustments-horizontal';

    protected static ?string $navigationGroup = 'Settings';

    protected static ?string $navigationLabel = 'Profile Settings';

    protected static string $view = 'filament.pages.settings';

    public ?array $settings = [];

    public function __construct()
    {
        $this->settings = [
            'name' => auth()->user()->name,
            'email' => auth()->user()->email,
        ];
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make(2)->schema([
                    TextInput::make('name')
                        ->label('Name')
                        ->required()
                        ->maxLength(255),
                    TextInput::make('email')
                        ->label('Email')
                        ->required()
                        ->email()
                        ->maxLength(255)
                        ->unique(ignorable: auth()->user())
                ])
                
            ])->statePath('settings');
    }

    public function save(): void
    {
        $state = $this->form->getState();

        auth()->user()->update([
            'name' => $state['name'],
            'email' => $state['email'],
        ]);

        Notification::make()->title('Profile updated successfully!')->success()->send();
    }
}

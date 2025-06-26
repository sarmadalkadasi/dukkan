<?php

namespace App\Filament\Vendor\Pages;

use \Filament\Forms\Components\Textarea;
use App\Livewire\SubscriptionInformationWidget;
use App\Models\Tenant;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Pages\Page;

class Settings extends Page
{
    use InteractsWithForms;
    
    protected static ?string $navigationIcon = 'heroicon-o-adjustments-horizontal';

    protected static ?string $navigationGroup = 'Settings';

    protected static ?string $navigationLabel = 'My Settings';

    protected static string $view = 'filament.pages.settings';

    public ?array $data = [];

    public function mount(): void
    {
        $user = auth()->user();
        $store = Tenant::firstWhere('email', $user->email);

        $this->form->fill([
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
            ],
            'store' => [
                'name' => $store->name,
                'description' => $store->description,
            ],
        ]);
    }


    protected function getHeaderWidgets(): array
    {
        return [
            SubscriptionInformationWidget::class,
        ];
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Profile Settings')->schema([
                    Grid::make(2)->schema([
                        TextInput::make('user.name')
                            ->label('Name')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('user.email')
                            ->label('Email')
                            ->required()
                            ->email()
                            ->maxLength(255)
                            ->unique(ignorable: auth()->user()),
                    ]), 
                ]), 
                Section::make('Store Settings')->schema([
                    Grid::make(2)->schema([
                        TextInput::make('store.name')
                            ->label('Store Name')
                            ->maxLength(155)
                            ->required(),
                        Textarea::make('store.description')
                        ->maxLength(255)
                        ->columnSpanFull(),                     

                    ])
                ]),
                
            ])->statePath('data');

    }

    public function save(): void
    {
        $data = $this->form->getState();
        $user = auth()->user();

        $user->update([
            'name' => $data['user']['name'],
            'email' => $data['user']['email'],
        ]);
        
        tenant()->update([
            'name' => $data['store']['name'],
            'description' => $data['store']['description'],
        ]);

        Notification::make()->title("It's updated successfully!")->success()->send();
    }
}
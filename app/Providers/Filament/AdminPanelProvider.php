<?php

namespace App\Providers\Filament;

use App\Filament\Widgets\BlogTenantChart as WidgetsBlogTenantChart;
use App\Filament\Widgets\BlogUsersChart as WidgetsBlogUsersChart;
use App\Filament\Widgets\StateOverView;
use App\Http\Middleware\PreventAccessFromTenantDomains;
use EightyNine\Reports\ReportsPlugin;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use Stephenjude\FilamentTwoFactorAuthentication\TwoFactorAuthenticationPlugin;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->colors([
                'primary' => Color::Amber,
            ])->font('El Messiri')
            ->brandLogo(asset('images/logo.png'))
            ->favicon(asset('images/favicon.png'))
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\\Filament\\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\\Filament\\Pages')
            ->pages([
                Pages\Dashboard::class,
            ])
            ->plugins([
                TwoFactorAuthenticationPlugin::make()
                        ->enableTwoFactorAuthentication() // Enable Google 2FA
                        ->addTwoFactorMenuItem() // Add 2FA menu item
            ])
            ->widgets([
                StateOverView::class,
                WidgetsBlogTenantChart::class,
                WidgetsBlogUsersChart::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
                PreventAccessFromTenantDomains::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ])
            ->plugins([
                ReportsPlugin::make()
            ]);;
    }
}

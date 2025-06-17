<?php

namespace App\Providers\Filament;

use App\Filament\Vendor\Widgets\BlogCustomerChart;
use App\Filament\Vendor\Widgets\BlogOrderChart as WidgetsBlogOrderChart;
use App\Filament\Vendor\Widgets\StateOverView;
use App\Filament\Widgets\BlogOrderChart;
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
use Stancl\Tenancy\Middleware\InitializeTenancyByDomain;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;

class VendorPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->id('vendor')
            ->path('vendor')
            ->sidebarWidth('14rem')
            ->colors([
                'primary' => Color::Blue,
            ])->font('El Messiri')
            ->brandLogo(asset('images/logo.png'))
            ->favicon(asset('images/favicon.png'))
            ->discoverResources(in: app_path('Filament/Vendor/Resources'), for: 'App\\Filament\\Vendor\\Resources')
            ->discoverPages(in: app_path('Filament/Vendor/Pages'), for: 'App\\Filament\\Vendor\\Pages')
            ->pages([
                Pages\Dashboard::class,
            ])
            // ->discoverWidgets(in: app_path('Filament/Vendor/Widgets'), for: 'App\\Filament\\Vendor\\Widgets')
            ->widgets([
                StateOverView::class,
                BlogCustomerChart::class,
                WidgetsBlogOrderChart::class,
            ])
            ->middleware([
                'universal',
                InitializeTenancyByDomain::class,
                PreventAccessFromCentralDomains::class,
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ], isPersistent: true)
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}

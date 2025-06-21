<?php

namespace App\Providers;

use App\Services\CartService;
use BezhanSalleh\FilamentLanguageSwitch\LanguageSwitch;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        LanguageSwitch::configureUsing(function (LanguageSwitch $switch) {
            $switch
                ->locales(['ar','en']); // also accepts a closure
        });
        /*Pass domain to front-end in props*/
        Inertia::share([
            'domain' => fn () => request()->getHost(),
        ]);
    }
}

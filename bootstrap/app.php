<?php

use App\Http\Middleware\HandleAppearance;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;
use Illuminate\Support\Facades\Route;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        function (){
            $centralDomain = config('tenancy.central_domains');

            foreach($centralDomain as $domain){
                Route::middleware('web')
                ->domain($domain)
                ->group(base_path('routes/web.php'));
            }
            Route::middleware('web')->group(base_path('routes/tenant.php'));
        },

        // web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->encryptCookies(except: ['appearance', 'sidebar_state']);
        $middleware->web(append: [
            HandleAppearance::class,
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ]);
        $middleware->validateCsrfTokens(except: ['livewire/*']);
        $middleware->group('universal', []);

        $middleware->validateCsrfTokens(except: [
            'stripe/*'
        ]);

    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();

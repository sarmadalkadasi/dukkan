<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use Stancl\Tenancy\Middleware\InitializeTenancyByDomain;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;

/*
|--------------------------------------------------------------------------
| Tenant Routes
|--------------------------------------------------------------------------
|
| Here you can register the tenant routes for your application.
| These routes are loaded by the TenantRouteServiceProvider.
|
| Feel free to customize them however you want. Good luck!
|
*/

Route::middleware([
    'web',
    InitializeTenancyByDomain::class,
    PreventAccessFromCentralDomains::class,
])->group(function () {

    // Guest routes
    Route::get('/', [ProductController::class, 'index'])
        ->name('store.index');
    Route::get('/product/{product:slug}', [ProductController::class, 'show'])
        ->name('product.show');

    Route::controller(CartController::class)->group(function () {
        Route::get('/cart', 'index')->name('cart.index');
        Route::post('/cart/add/{product}',  'store')
            ->name('cart.store');
        Route::put('/cart/{product}', 'update')
            ->name('cart.update');
        Route::delete('/cart/{product}', 'destroy')
            ->name('cart.destroy');
    });


    Route::get('/details', function () {
        return Inertia::render('product/details');
    })->name('product.details');

    //
    Route::middleware('auth')->group(function () {

        Route::middleware(['verified'])->group(function () {
            Route::post('/cart/checkout', [CartController::class, 'checkout'])
                ->name('cart.checkout');
        });
    });

    require __DIR__.'/settings.php';
    require __DIR__.'/auth.php';
});

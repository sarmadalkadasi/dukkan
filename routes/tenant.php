<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;
use App\Http\Middleware\IsActive;
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
    IsActive::class,
])->group(function () {

    Route::get('/', [ProductController::class, 'index'])
        ->name('store.index');
    Route::get('/product/{product:slug}', [ProductController::class, 'show'])
        ->name('product.show');

    Route::post('/cart/store/{product}', function () {

    })->name('cart.store');
//    Route::get('/', function () {
//        return Inertia::render('store/index');
//    })->name('store.index');

    Route::get('/details', function () {
        return Inertia::render('product/details');
    })->name('product.details');

    require __DIR__.'/settings.php';
    require __DIR__.'/auth.php';
});

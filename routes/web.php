<?php

use App\Http\Controllers\StoreController;
use App\Http\Middleware\HasStore;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

foreach (config('tenancy.central_domains') as $domain) {
    Route::domain($domain)->group(function () {
        // your actual routes

        Route::get('/', function () {
            return Inertia::render('welcome');
        })->name('home');

        Route::middleware(['auth', 'verified', HasStore::class])->group(function () {
            /*
            Route::get('dashboard', function () {
                return Inertia::render('dashboard');
            })->middleware(['auth', 'verified'])->name('dashboard');
            */
            Route::get('/stores/create', [StoreController::class, 'create'])
            ->name('store.create');
            Route::post('/stores/create', [StoreController::class, 'store'])
            ->name('store.store');
        });

        require __DIR__.'/settings.php';
        require __DIR__.'/auth.php';
    });
}


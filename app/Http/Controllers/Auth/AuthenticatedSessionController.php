<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\Tenant;
use App\Services\CartService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Show the login page.
     */
    public function create(Request $request): Response
    {
        return Inertia::render('auth/login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => $request->session()->get('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request, CartService $cartService): \Symfony\Component\HttpFoundation\Response
    {
        $request->authenticate();

        $request->session()->regenerate();

        $user = Auth::user();

        $host = $request->getHost();

        if(in_array($host, config('tenancy.central_domains'))){
            if($user->rule == 'admin'){
                return Inertia::location('/admin');
            }
            elseif($user->rule== 'vendor' && $domain = Tenant::get()->firstWhere('email', $user->email)->domains->first()->domain){
                return Inertia::location('http://' . $domain .':8000'.'/vendor');
            }

            $cartService->moveCartItemsToDatabase($user->id);

        }
        $cartService->moveCartItemsToDatabase($user->id);
        return $user->rule == 'vendor'? Inertia::location('/vendor') :
            Inertia::location('/');
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}

<?php

namespace App\Http\Controllers\Auth;

use \Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Show the registration page.
     */
    public function create(): Response
    {
        return Inertia::render('auth/register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): \Symfony\Component\HttpFoundation\Response
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $rule = in_array($request->getHost(), config('tenancy.central_domains') ) &&
         Str::contains( $request->name, '@admin')?
         'admin':'user';

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'rule' => $rule,
            'trial_ends_at' => now()->addDays(14),
        ]);

        event(new Registered($user));
        Auth::login($user);
        $host = $request->getHost();

        if(in_array($host, config('tenancy.central_domains'))){
            if($user->rule == 'admin'){
                return Inertia::location('/admin');
            }
            else{
                return redirect()->route('store.create');
            }
        }
        return redirect('/');
    }
}

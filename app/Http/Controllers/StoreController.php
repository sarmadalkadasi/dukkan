<?php

namespace App\Http\Controllers;

use App\Models\Tenant;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stores = Tenant::latest()->paginate(10);
        return Inertia::render('welcome', compact('stores'))->with('i', (request()->input('page', 1) - 1) * 5);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       return Inertia::render('store/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'domain' => 'required|string|max:255',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:3072',
        ]);

        $logo = null;
        
        if ($request->hasFile('logo')) { 
            $logo = $request->file('logo')->store(path:'logos', options:['disk' => 'public']);
        }

        $tenant = Tenant::create([
            'name' =>  $request->name,
            'description' => $request->description,
            'email' => $request->user()->email,
            'password' => $request->user()->password,
            'logo' => $logo,
        ]);

        $tenant->domains()->create([
            'domain' => $request->domain,
        ]);

        return Inertia::location('http://' . $request->domain . ':8000');
    }

    /**
     * Display the specified resource.
     */
    public function show(Tenant $tenant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tenant $tenant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tenant $tenant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tenant $tenant)
    {
        //
    }
}

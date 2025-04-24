<?php

namespace App\Jobs;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class CreateTenantUser implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(protected Tenant $tenant){}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $this->tenant->run(function (){

            $user = Auth::user();

            try {
                if ($user instanceof User && $user->rule !== 'admin') {
                    $user->update([
                        'name' => $this->tenant->name,
                        'email' => $this->tenant->email,
                        'password' => $this->tenant->password,
                        'rule' => 'vendor',
                    ]);
                } else {
                    User::create([
                        'name' => $this->tenant->name,
                        'email' => $this->tenant->email,
                        'password' => $this->tenant->password,
                        'rule' => 'vendor',
                    ]);
                }
            } catch (\Exception $e) {
                // Log the error or handle it as needed
                Log::error('Failed to create or update user: ' . $e->getMessage());
            }
        });

    }
}

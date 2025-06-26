<?php

namespace App\Jobs;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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
    {$user = Auth::user();

        if ($user->rule !== 'admin') {
            $this->updateUserRole($user);
        }
        $this->tenant->run(function () use ($user) {

            User::create([
                'name' => $this->tenant->name,
                'email' => $this->tenant->email,
                'password' => $user->rule === 'admin' ? Hash::make($this->tenant->password) : $this->tenant->password,
                'rule' => 'vendor',
            ]);
        });
    }

    public function updateUserRole($user): void
    {
        $user->rule = 'vendor';
        $user->tenant_id = $this->tenant->id;
        $user->save();
    }
}

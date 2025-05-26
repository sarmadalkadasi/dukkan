<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Stancl\Tenancy\Contracts\Tenant;

class PrepareTenantStorage implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(protected Tenant $tenant){}

    /**
     * Execute the job.
     */
    public function handle()
    {
        $tenantKey = $this->tenant->getTenantKey();
        $dirs = [
            "framework/cache",
        ];
        foreach ($dirs as $dir) {
            $path = storage_path("tenant{$tenantKey}/{$dir}");
            if (!file_exists($path)) {
                mkdir($path, 0775, true);
            }
        }
    }
}

<?php

namespace App\Filament\Resources\TenantResource\Pages;

use App\Filament\Resources\TenantResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateTenant extends CreateRecord
{
    protected static string $resource = TenantResource::class;

    protected function modifyDomain($domain = ''): string
    {
        return str_replace('.dukkan.test', '', $domain);
    }

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $tempDomain = $this->modifyDomain($data['domain']);
        $data['domain'] = "{$tempDomain}.dukkan.test";

        return $data;
    }

    protected function afterCreate(): void
    {
        $tenant = $this->getRecord();
        $tenant->domains()->create([
            'domain' => $tenant->domain,
        ]);
    }
}
<?php

namespace App\Filament\Resources\TenantResource\Pages;


use App\Filament\Resources\TenantResource;
use Filament\Actions;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditTenant extends EditRecord
{
    protected static string $resource = TenantResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }

    protected function modifyDomain($domain = ''): string
    {
        return str_replace('.dukkan.test', '', $domain);
    }

    protected function mutateFormDataBeforeFill(array $data): array
    {
        $data['domain'] = $this->modifyDomain($data['domain']);

        return $data;
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        $tempDomain = $this->modifyDomain($data['domain']);
        $data['domain'] = "{$tempDomain}.dukkan.test";

        return $data;
    }

    protected function afterSave(): void
    {
        $tenant = $this->getRecord();
        $tenant->domains()->update([
            'domain' => $tenant->domain,
        ]);
    }
}
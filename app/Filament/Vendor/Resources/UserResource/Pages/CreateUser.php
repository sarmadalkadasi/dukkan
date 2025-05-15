<?php

namespace App\Filament\Vendor\Resources\UserResource\Pages;

use App\Filament\Vendor\Resources\UserResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateUser extends CreateRecord
{
    protected static string $resource = UserResource::class;
}

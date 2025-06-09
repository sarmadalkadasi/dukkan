<?php

namespace App\Filament\Widgets;

use App\Models\Tenant;
use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StateOverView extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make(
                'Active Stores',
                Tenant::where('isActive', true)->count() ?? 0,
            )->icon('heroicon-o-building-storefront'),
            Stat::make(
                'Total Customers',
                User::where('rule', 'vendor')->count() ?? 0,
            )->icon('heroicon-o-users'),
            Stat::make(
                'Total Stores',
                Tenant::all()->count() ?? 0,
            )->icon('heroicon-o-building-storefront'),
        ];
    }
}

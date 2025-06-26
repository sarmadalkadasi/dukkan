<?php

namespace App\Filament\Vendor\Widgets;

use App\Models\Category;
use App\Models\Department;
use App\Models\Product;
use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StateOverView extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make(
                'Total Customers',
                User::where('rule', 'user')->count() ?? 0,
            )->icon('heroicon-o-users'),
            Stat::make(
                'Total Departments',
                Department::all()->count() ?? 0,
            )->icon('heroicon-o-rectangle-group'),
            Stat::make(
                'Total Categories',
                Category::all()->count() ?? 0,
            )->icon('heroicon-o-rectangle-stack'),
        ];
    }
}

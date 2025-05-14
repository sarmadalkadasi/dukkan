<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
//    use InteractsWithMedia;
//
//    public function registerMediaConversions(?Media $media = null): void
//    {
//        $this->addMediaConversion('thumb')
//            ->width(100);
//
//        $this->addMediaConversion('small')
//            ->width(300);
//
//        $this->addMediaConversion('large')
//            ->width(1200);
//    }

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

//    public function variationTypes(): HasMany
//    {
//        return $this->hasMany(VariationType::class);
//    }
//
//    public function variations(): HasMany
//    {
//        return $this->hasMany(ProductVariation::class);
//    }
}

<?php

namespace App\MediaLibrary;

use Spatie\MediaLibrary\Support\PathGenerator\PathGenerator;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class TenantPathGenerator implements PathGenerator
{
    public function getPath(Media $media): string
    {
        $tenantId = tenant('id') ?? 'central';
        return "tenant{$tenantId}/media/{$media->id}/";
    }

    public function getPathForConversions(Media $media): string
    {
        return $this->getPath($media) . 'conversions/';
    }

    public function getPathForResponsiveImages(Media $media): string
    {
        return  $this->getPath($media) . 'responsive/';
    }
}

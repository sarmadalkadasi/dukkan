<x-filament-panels::page>
    <x-filament-panels::form id="form" wire:submit="save">
        {{ $this->form }}
        <div class = "flex">
            <x-filament::button
            type="submit"
            class="w-auto"
            >
                {{ __('Save') }}
            </x-filament::button>
        </div>
    </x-filament-panels::form>
</x-filament-panels::page>

<x-filament-widgets::widget>
    <x-filament::section>
        <div class="flex items-center justify-between gap-4">
            @if($trialEndsAt)
                <div style="font-size: 1.2rem; font-style: italic">
                    {!! __('Your free trial will end on <span style="color: green">:date</span>, Upgrading to continue enjoying our services.', ['date' => $trialEndsAt->diffForHumans(['parts' => 2, 'join' => ', ', 'skip' => 'week'])]) !!}
                </div>
                <x-filament::button wire:click="subscribe" class="width-auto">        
                    {{ __('Subscribe Now') }}
                </x-filament::button>
            @elseif ($subscriptionEndsAt)
                <div style="font-size: 1.2rem; font-style: italic">  {!! __('Your subscription will end on <span style="color: green">:date</span>' , ['date' => $subscriptionEndsAt->diffForHumans(['parts' => 2, 'join' => ', ', 'skip' => 'week'])]) !!}</div>
            @else
                <div style="font-size: 1.2rem; font-style: italic">
                    {!! __('Your subscription will renew on <span style="color: green">:date</span>, enjoying our services.', ['date' => $subscriptionRenewsAt->diffForHumans(['parts' => 2, 'join' => ', ', 'skip' => 'week'])]) !!}
                </div>  
                <x-filament::button wire:click="cancel" wire:confirm="Are you sure you want to cancel your subscription!?" class="width-auto">        
                    {{ __('Cancel Subscription') }}
                </x-filament::button>          
            @endif
        </div>
    </x-filament::section>
</x-filament-widgets::widget>

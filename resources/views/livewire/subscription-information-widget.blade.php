<x-filament-widgets::widget>
    <x-filament::section>
        <div class="flex items-center justify-between gap-4">
            @if($trialEndsAt )
                <div style="font-size: 1.2rem; font-style: italic">
                    {!! __('Your free trial will end on <span style="color: green">:date</span>, Upgrading to continue enjoying our services.', ['date' => $trialEndsAt ? $trialEndsAt->diffForHumans(['parts' => 2, 'join' => ', ', 'skip' => 'week']) : '']) !!}
                </div>
                <x-filament::button wire:click="subscribe" class="width-auto">        
                    {{ __('Subscribe Now') }}
                </x-filament::button>
            @elseif ($subscriptionEndsAt && $subscriptionStatus == 'active')
                <div style="font-size: 1.2rem; font-style: italic">  
                    {!! __('Your subscription well end on <span style="color: green">:date</span>' , ['date' => $subscriptionEndsAt ? $subscriptionEndsAt->diffForHumans(['parts' => 2, 'join' => ', ', 'skip' => 'week']) : '']) !!}
                </div>
            @elseif ($subscriptionEndsAt <= now() && $subscriptionStatus == 'canceled')
                <div style="font-size: 1.2rem; font-style: italic; color: tomato">
                    {{__('Your subscription is ended')}}
                </div>
                <x-filament::button wire:click="subscribe" class="width-auto">        
                        {{ __('Subscribe Now') }}
                    </x-filament::button>
            @else
                @if($subscriptionRenewsAt)
                    <div style="font-size: 1.2rem; font-style: italic">
                        {!! __('Your subscription will renew on <span style="color: green">:date</span>, enjoying our services.', ['date' => $subscriptionRenewsAt->diffForHumans(['parts' => 2, 'join' => ', ', 'skip' => 'week'])]) !!}
                    </div>  
                    <x-filament::button wire:click="cancel" wire:confirm="Are you sure you want to cancel your subscription!?" class="width-auto">        
                        {{ __('Cancel Subscription') }}
                    </x-filament::button>          
                @else
                    <div style="font-size: 1.2rem; font-style: italic; color: tomato">
                        {{ __('You do not have an active subscription.') }}
                    </div>
                    <x-filament::button wire:click="subscribe" class="width-auto">        
                        {{ __('Subscribe Now') }}
                    </x-filament::button>
                @endif
            @endif
        </div>
    </x-filament::section>
</x-filament-widgets::widget>
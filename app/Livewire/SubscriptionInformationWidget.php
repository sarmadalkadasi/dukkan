<?php

namespace App\Livewire;

use Carbon\Carbon;
use Filament\Widgets\Widget;

class SubscriptionInformationWidget extends Widget
{
    protected static string $view = 'livewire.subscription-information-widget';

    protected int|string|array $columnSpan = 'full';
    public Carbon|string|null $trialEndsAt = null;
    public Carbon|string|null $subscriptionRenewsAt = null;
    public Carbon|string|null $subscriptionEndsAt = null;
    
    public function mount(): void
    {
        $this->trialEndsAt = auth()->user()->trial_ends_at;
        $this->subscriptionEndsAt = auth()->user()->subscription()->ends_at;
        
        if(!auth()->user()->trial_ends_at){
            $this->subscriptionRenewsAt = Carbon::createFromTimestamp(
                auth()->user()->subscription()
                ->asStripeSubscription()
                ->current_period_end
            );
        }
    }


    public function subscribe(){
        return auth()->user()
        ->newSubscription('default', 'price_1RTEiBCirV1jVRkW9ctQl6ri')
        ->checkout([
            'success_url' => url('/vendor'),
            'cancel_url'  => url('/vendor/settings'),
        ]);
    }

    public function cancel(){
        return auth()
        ->user()
        ->subscription()
        ->cancel();
    }
}

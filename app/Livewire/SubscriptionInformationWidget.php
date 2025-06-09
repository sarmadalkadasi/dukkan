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
    public string|null $subscriptionStatus = null;
    
    public function mount(): void
    {
        $this->subscriptionStatus = auth()->user()->subscription('default')->stripe_status;
        $this->trialEndsAt = auth()->user()->trial_ends_at;
        $subscription = auth()->user()->subscription();
        
        if ($subscription) {
            $this->subscriptionEndsAt = $subscription->ends_at;
            if(!auth()->user()->trial_ends_at){
                $stripeSubscription = $subscription->asStripeSubscription();
                if ($stripeSubscription) {
                    $this->subscriptionRenewsAt = Carbon::createFromTimestamp(
                        $stripeSubscription->current_period_end
                    );
                } else {
                    $this->subscriptionRenewsAt = null;
                }
            }
        } else {
            $this->subscriptionEndsAt = null;
            $this->subscriptionRenewsAt = null;
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
        ->subscription('default')
        ->cancelNow();
    }
}

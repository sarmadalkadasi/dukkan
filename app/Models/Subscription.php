<?php

namespace App\Models;

use Laravel\Cashier\Subscription as CashierSubscription;
use Stripe\PaymentIntent as StripePaymentIntent; // LaravelStripe status is here

class Subscription extends CashierSubscription
{
    // ...
}
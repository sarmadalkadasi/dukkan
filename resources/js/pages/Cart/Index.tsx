import CartItem from '@/components/cart-item';
import CurrencyFormatter from '@/components/currency-formatter';
import { Button } from '@/components/ui/button';
import RootLayout from '@/layouts/store-layout';
import { GroupedCartItems, PageProps } from '@/types';
import { CreditCardIcon } from '@heroicons/react/24/outline';
import { Head, Link } from '@inertiajs/react';
import { Wallet } from 'lucide-react';

function Index({ csrf_token, cartItems, totalQuantity, totalPrice }: PageProps<{ cartItems: Record<number, GroupedCartItems> }>) {
    return (
        <RootLayout>
            <Head title="سلتك" />

            <div className="container mx-auto flex flex-col gap-4 p-8 lg:flex-row text-right" dir="rtl">
                <div className="card order-2 flex-1 bg-white lg:order-1 dark:bg-gray-800">
                    <div className="card-body">
                        <h2 className="text-lg font-bold">سلة التسوق</h2>

                        <div className="my-4">
                            {Object.keys(cartItems).length === 0 && (
                                <div className={'py-2 text-center text-gray-500'}>لا توجد أي عناصر حتى الآن.</div>
                            )}
                            {Object.values(cartItems).map((cartItem) => (
                                <div key={cartItem.user.id}>
                                    <div className={'mb-4 flex items-center justify-between border-b border-gray-300 pb-4'}>
                                        <Link href="/public" className={'underline'}>
                                            {cartItem.user.name}
                                        </Link>
                                        <div>
                                            <form action={route('cart.checkout')} method="post">
                                                <input type="hidden" name="_token" value={csrf_token} />
                                                <input type="hidden" name="user_id" value={cartItem.user.id} />
                                                <button className="btn btn-sm btn-ghost">
                                                    <CreditCardIcon className="size-6" />
                                                    الدفع لهذا البائع فقط
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    {cartItem.items.map((item) => (
                                        <CartItem item={item} key={item.id} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="card order-1 bg-white lg:order-2 lg:min-w-[260px] dark:bg-gray-800">
                    <div className="card-body">
                        المجموع الفرعي ({totalQuantity} عنصر): &nbsp;
                        <CurrencyFormatter amount={totalPrice} />
                        <form action={route('cart.checkout')} method="post">
                            <input type="hidden" name="_token" value={csrf_token} />
                            <Button className="rounded-full">
                                <CreditCardIcon className={'size-6'} />
                                الدفع عبر البطاقة الائتمانية
                            </Button>
                        </form>
                        <hr />
                        <form action={''} method="post">
                            <input type="hidden" name="_token" value={csrf_token} />
                            <Button className="rounded-full">
                                <Wallet className={'size-6'} />
                                الدفع عبر المحافظ الإلكترونية
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </RootLayout>
    );
}

export default Index;

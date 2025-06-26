'use client';
import { Link,   usePage } from '@inertiajs/react';
import CurrencyFormatter from "@/components/currency-formatter";
import {productRoute} from "@/helpers";

const CartModal = () => {

        const {totalQuantity, totalPrice, miniCartItems} = usePage().props;

    return (
        <div className="absolute top-12 right-0 z-20 flex w-max flex-col gap-6 rounded-md bg-background text-color-foreground p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h2 className="text-xl">Shopping Cart</h2>
            {/* LIST */}
            <div className="flex flex-col gap-8">
                {/* ITEM */}
                <div tabIndex={0} className="card card-compact dropdown-content bg-background z-1 mt-3 w-[480px] shadow">
                    <div className="card-body">
                        <span className="text-lg font-bold">{totalQuantity} Items</span>

                        <div className={'my-4 max-h-[300px] overflow-auto'}>
                            {miniCartItems.length === 0 && (
                                <div className={'py-2 text-gray-500 text-center'}>
                                    You don't have any items yet.
                                </div>
                            )}
                            {miniCartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 p-3">
                                    <Link href={productRoute(item)}
                                          className={'w-16 h-16 flex justify-center'}>
                                        <img src={item.image}
                                             alt={item.title}
                                             className={'max-w-full max-h-full'} />
                                    </Link>
                                    <div className={'flex-1'}>
                                        <h3 className={'mb-3 font-semibold'}>
                                            <Link href={route('product.show', item.slug)}>
                                                {item.title}
                                            </Link>
                                        </h3>
                                        <div className={'flex justify-between text-sm'}>
                                            <div>
                                                Quantity: {item.quantity}
                                            </div>
                                            <div>
                                                <CurrencyFormatter amount={item.quantity * item.price} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <span className="text-lg">
                                    Subtotal: <CurrencyFormatter amount={totalPrice} />
                                </span>
                        <div className="card-actions">
                            <Link href={route('cart.index')} className="btn btn-primary btn-block">
                                View cart
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal;

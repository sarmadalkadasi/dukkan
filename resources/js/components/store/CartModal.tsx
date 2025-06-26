'use client';
import CurrencyFormatter from '@/components/currency-formatter';
import { productRoute } from '@/helpers';
import { Link, usePage } from '@inertiajs/react';

const CartModal = () => {
    const { totalQuantity, totalPrice, miniCartItems } = usePage().props;

    return (
        <div className="absolute top-12 left-0 z-20 flex w-max flex-col gap-6 rounded-md bg-white p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h2 className="text-xl">سلة التسوق</h2>
            {/* القائمة */}
            <div className="flex flex-col gap-8">
                {/* عنصر */}
                <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-[480px] shadow">
                    <div className="card-body">
                        <span className="text-lg font-bold">{totalQuantity} عنصر</span>

                        <div className={'my-4 max-h-[300px] overflow-auto'}>
                            {miniCartItems.length === 0 && <div className={'py-2 text-center text-gray-500'}>لا توجد أي عناصر حتى الآن.</div>}
                            {miniCartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 p-3">
                                    <Link href={productRoute(item)} className={'flex h-16 w-16 justify-center'}>
                                        <img src={item.image} alt={item.title} className={'max-h-full max-w-full'} />
                                    </Link>
                                    <div className={'flex-1'}>
                                        <h3 className={'mb-3 font-semibold'}>
                                            <Link href={route('product.show', item.slug)}>{item.title}</Link>
                                        </h3>
                                        <div className={'flex justify-between text-sm'}>
                                            <div>الكمية: {item.quantity}</div>
                                            <div>
                                                <CurrencyFormatter amount={item.quantity * item.price} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <span className="text-lg">
                            الإجمالي: <CurrencyFormatter amount={totalPrice} />
                        </span>
                        <div className="card-actions">
                            <Link href={route('cart.index')} className="btn btn-primary btn-block">
                                عرض السلة
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal;

import {Head, Link} from '@inertiajs/react';
import CurrencyFormatter from "@/components/currency-formatter";
import {CheckCircleIcon} from "@heroicons/react/24/outline";
import RootLayout from "@/layouts/store-layout";
import {PageProps, Order} from "@/types";

function Success({orders}: PageProps<{orders: Order[]}>) {

    console.log(orders);
    return (
        <RootLayout>
            <Head title="تمت عملية الدفع" />

            {/*<pre>{JSON.stringify(order, undefined, 2)}</pre>*/}
            <div className="w-[480px] mx-auto py-8 px-4" dir="rtl">
                <div className="flex flex-col gap-2 items-center">
                    <div className="text-6xl text-emerald-600">
                        <CheckCircleIcon className={"size-24"} />
                    </div>
                    <div className="text-3xl">
                        تمت عملية الدفع
                    </div>
                </div>
                <div className="my-6 text-lg">
                    شكرًا لشرائك. تم إتمام عملية الدفع بنجاح.
                </div>
                {orders.map(order => (
                    <div key={order.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-4">
                        <h3 className="text-3xl mb-3">ملخص الطلب</h3>
                        <div className="flex justify-between mb-2 font-bold">
                            <div className="text-gray-400">
                                البائع
                            </div>
                            <div>
                                <Link href="#" className="hover:underline">
                                    {order.vendorUser?.name || 'بائع غير معروف'}
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-between mb-2">
                            <div className="text-gray-400">
                                رقم الطلب
                            </div>
                            <div>
                                <Link href="#" className="hover:underline">#{order.id}</Link>
                            </div>
                        </div>
                        <div className="flex justify-between mb-3">
                            <div className="text-gray-400">
                                عدد العناصر
                            </div>
                            <div>
                                {order.orderItems.length}
                            </div>
                        </div>
                        <div className="flex justify-between mb-3">
                            <div className="text-gray-400">
                                الإجمالي
                            </div>
                            <div>
                                <CurrencyFormatter amount={order.total_price} />
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <Link href="#" className="btn btn-primary">
                                عرض تفاصيل الطلب
                            </Link>
                            <Link href={route('store.index')} className="btn">
                                العودة إلى الصفحة الرئيسية
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </RootLayout>
    );
}

export default Success;

const Footer = () => {
    return (
        <div dir="rtl" className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm dark:text-black text-right">
            {/* الأعلى */}
            <div className="flex flex-col md:flex-row justify-between gap-24">
                {/* اليسار */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <a href="/">
                        <div className="text-2xl tracking-wide">المتجر المفتوح</div>
                    </a>
                    <p>
                        ذمار، الجمهورية اليمنية.
                    </p>
                    <span className="font-semibold">info@openshop.com</span>
                    <span className="font-semibold">+966531441305</span>
                    <div className="flex gap-6">
                        <img src="/facebook.png" alt="" width={16} height={16} />
                        <img src="/instagram.png" alt="" width={16} height={16} />
                        <img src="/youtube.png" alt="" width={16} height={16} />
                        <img src="/pinterest.png" alt="" width={16} height={16} />
                        <img src="/x.png" alt="" width={16} height={16} />
                    </div>
                </div>
                {/* الوسط */}
                <div className="hidden lg:flex justify-between w-1/2">
                    <div className="flex flex-col justify-between">
                        <h1 className="font-medium text-lg">الشركة</h1>
                        <div className="flex flex-col gap-6">
                            <a href="">من نحن</a>
                            <a href="">الوظائف</a>
                            <a href="">الشركاء</a>
                            <a href="">المدونة</a>
                            <a href="">اتصل بنا</a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h1 className="font-medium text-lg">التسوق</h1>
                        <div className="flex flex-col gap-6">
                            <a href="">الواصل حديثًا</a>
                            <a href="">الإكسسوارات</a>
                            <a href="">رجال</a>
                            <a href="">نساء</a>
                            <a href="">كل المنتجات</a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h1 className="font-medium text-lg">المساعدة</h1>
                        <div className="flex flex-col gap-6">
                            <a href="">خدمة العملاء</a>
                            <a href="">حسابي</a>
                            <a href="">اعثر على متجر</a>
                            <a href="">الشروط والخصوصية</a>
                            <a href="">بطاقة الهدايا</a>
                        </div>
                    </div>
                </div>
                {/* اليمين */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <h1 className="font-medium text-lg">اشترك</h1>
                    <p>
                        كن أول من يحصل على آخر الأخبار حول العروض والاتجاهات والمزيد!
                    </p>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="عنوان البريد الإلكتروني"
                            className="p-4 w-3/4 dark:border-black border"
                        />
                        <button className="w-1/4 bg-lightPink text-white">انضم</button>
                    </div>
                    <span className="font-semibold">مدفوعات آمنة</span>
                    <div className="flex justify-between">
                        <img src="/discover.png" alt="" width={40} height={20} />
                        <img src="/skrill.png" alt="" width={40} height={20} />
                        <img src="/paypal.png" alt="" width={40} height={20} />
                        <img src="/mastercard.png" alt="" width={40} height={20} />
                        <img src="/visa.png" alt="" width={40} height={20} />
                    </div>
                </div>
            </div>
            {/* الأسفل */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
                <div className="">© 2025 دكّان</div>
                <div className="flex flex-col gap-8 md:flex-row">
                    <div className="">
                        <span className="text-gray-500 ml-4">اللغة</span>
                        <span className="font-medium">العربية</span>
                    </div>
                    <div className="">
                        <span className="text-gray-500 ml-4">العملة</span>
                        <span className="font-medium">ريال يمني</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

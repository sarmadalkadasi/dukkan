import { Head, useForm } from '@inertiajs/react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { cn } from '@/lib/utils';
import { Textarea } from '@headlessui/react';

export default function CreateStore() {
    const { data, setData, processing, errors, post } = useForm({
        name: '',
        domain: '',
        description: '',
        logo: null as File | null,
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('store.store'));
    };

    return (
        <AuthLayout title="إنشاء متجر" description="قم بإنشاء متجر جديد لعرض منتجاتك وخدماتك.">
            <Head title="إنشاء متجر" />
            <form className="flex flex-col gap-6" dir="rtl" onSubmit={submit}>
                <div className="grid gap-6">
                    {/* اسم المتجر */}
                    <div className="grid gap-2">
                        <Label htmlFor="name">الاسم</Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            disabled={processing}
                            placeholder="اسم المتجر"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    {/* رابط المتجر */}
                    <div className="grid gap-2">
                        <Label htmlFor="store-domain">الرابط (الدومين)</Label>
                        <div className="flex items-center " dir='ltr'>
                            <span className="px-3 py-1.5 bg-gray-200 dark:text-background rounded-l-md">https://</span>
                            <Input
                                id="store-domain"
                                type="text"
                                required
                                tabIndex={2}
                                autoComplete="off"
                                placeholder="Store Name"
                                disabled={processing}
                                className="rounded-none"
                                onChange={(e) => setData({ ...data, domain: e.target.value + '.dukkan.test' })}
                            />
                            <span className="px-3 py-1.5 bg-gray-200 light:text-foreground dark:text-background rounded-r-md">.dukkan.test</span>
                        </div>
                        <InputError message={errors.domain} className="mt-2" />
                    </div>

                    {/* وصف المتجر */}
                    <div className="grid gap-2">
                        <Label htmlFor="store-description">الوصف</Label>
                        <Textarea
                            id="store-description"
                            tabIndex={3}
                            className={cn(
                                'border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground transition-{}color,box-shadow] flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                                'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-{}3px]',
                                'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                            )}
                            placeholder="أدخل وصف المتجر هنا"
                            disabled={processing}
                            onChange={(e) => setData({ ...data, description: e.target.value })}
                        ></Textarea>
                        <InputError message={errors.description} className="mt-2" />
                    </div>

                    {/* شعار المتجر */}
                    <div className="grid gap-2">
                        <Label htmlFor="store-logo">الشعار</Label>
                        <Input
                            id="store-logo"
                            type="file"
                            tabIndex={4}
                            className="file-input file-input-bordered w-full"
                            placeholder="رفع الشعار"
                            accept="image/*"
                            disabled={processing}
                            onChange={(e) => setData({ ...data, logo: e.target.files?.[0] || null })}
                        />
                        <InputError message={errors.logo} className="mt-2" />
                    </div>
                    {/* زر الإنشاء */}
                    <div className="mt-4 grid gap-2">
                        <Button type="submit" className="btn btn-primary w-full" disabled={processing}>
                            إنشاء المتجر
                        </Button>
                    </div>
                </div>
            </form>
        </AuthLayout>
    );
}

import { Head, useForm} from '@inertiajs/react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AuthLayout from '@/layouts/auth-layout';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Textarea } from '@headlessui/react';


export default function CreateStore() {
  const {data, setData, processing, errors, post} = useForm({
    name: '',
    domain: '',
    description: '',
    logo: null as File | null,
  });

  const submit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    post(route('stores.store')); 
  };

  return (
    <AuthLayout
      title=" Create Store"
      description="Create a new store to showcase your products and services."
    >

      <Head title="Create Store" />
      <form className="flex flex-col gap-6" onSubmit={submit}>
      <div className="grid gap-6">

         <div className="grid gap-2">
            <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</Label>
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
              placeholder="Store Name"
            />
            <InputError message={errors.name} className="mt-2" />
          </div>

            {/* رابط المتجر */}
            <div className="grid gap-2">
            <Label htmlFor="store-domain" className="block text-sm font-medium text-gray-700">Domain</Label>
            <Input
              id="store-domain"
              type="text"
              required
              tabIndex={2}
              autoComplete="off"
              placeholder="store.dukkan.test"
              disabled={processing}
              onChange={(e) => setData({ ...data, domain: e.target.value })}
            />
            <InputError message={errors.domain} className="mt-2" />
            </div>

            {/* وصف المتجر */}
            <div className="grid gap-2">
            <Label htmlFor="store-description" className="block text-sm font-medium text-gray-700">Description</Label>
            <Textarea
              id="store-description"
              tabIndex={3}
              className={cn(
                      "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-{}color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-{}3px]",
                      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                    )}
              placeholder="Input description here"
              disabled={processing}
              onChange={(e) => setData({ ...data, description: e.target.value })}
            ></Textarea>
            <InputError message={errors.description} className="mt-2" />
            </div>

            {/* شعار المتجر */}
            <div className="grid gap-2">
              
            <Label htmlFor="store-logo" className="block text-sm font-medium text-gray-700"> Logo </Label>
            <Input
              id="store-logo"
              type="file"
              tabIndex={4}
              className="file-input file-input-bordered w-full"
              placeholder="Upload logo"
              accept="image/*"
              disabled={processing}
              onChange={(e) => setData({ ...data, logo: e.target.files?.[0] || null })}
            />
            <InputError message={errors.logo} className="mt-2" />
            </div>

            {/* زر الإنشاء */}
            <div className="grid gap-2 mt-4">
            <Button
              type="submit"
              className="btn btn-primary w-full"
              disabled={processing}
            >
              Create Store
            </Button>
            </div>
        </div>
      </form>
    </AuthLayout>
  );
}

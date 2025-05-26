import { Product } from '@/types';
import { Link } from '@inertiajs/react';
import CurrencyFormatter from "@/components/currency-formatter";

export default function ProductItem({ product }: { product: Product }) {
    return (
        <div className="card bg-base-100 shadow-xl">
            <Link href={route('product.show', product.slug)}>
                <figure>
                    <img
                        src={product.image}
                        alt={product.title}
                    className="aspect-square w-full object-cover"/>
                </figure>
            </Link>
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>
                    by <Link href="/" className="hover:underline">{product.user.name}</Link>&nbsp;
                    in <Link href="/" className="hover:underline">{product.department.name}</Link>
                </p>
                <div className="card-actions items-center justify-between mt-3">
                    <button className="btn btn-primary">Add to Car</button>
                    <span className="text-2xl">
                        <CurrencyFormatter amount={product.price} />
                    </span>
                </div>
            </div>
        </div>
    );
}


// const ProductItem = () => {
//   const item = {
//     image: "/men/GoodMen9276_1.jpg",
//     title: "Test image"
//   }
//   return (
//     <a href={'/details'} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
//       <div className="relative w-full h-80">
//       <img alt={item.title} sizes="25w" src={item.image} className="absolute object-cover w-full h-full rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
//       <img alt={item.title}  sizes="25w" src="/0689a92be5.jpg" className="absolute object-cover w-full h-full rounded-md"/>
//
//       </div>
//       <div className="flex justify-between">
//       <span className="font-medium">Product Name</span>
//       <span className="font-semibold">$49 </span>
//
//         </div>
//         <div className="text-sm text-gray-500">
//           My description
//       </div>
//       <button className="rounded-2xl ring-1 ring-[#fdae49] text-[#fdae49] py-2 px-4 text-xs hover:bg-[#fdae49] hover:text-white w-max">
//         Add to cart
//       </button>
//     </a>
//   )
// }
//
// export default ProductItem

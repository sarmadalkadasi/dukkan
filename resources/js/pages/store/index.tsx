//import CategoryList from "@/components/store/CategoryList";
//import ProductList from "@/components/store/ProductList";
import Slider from "@/components/store/Slider";
import {Head} from "@inertiajs/react";
import RootLayout from "@/layouts/store-layout";
import { PageProps, PaginationProps, Product} from "@/types";
import ProductItem from "@/components/store/ProductItem";

export default function Home({
products
}: PageProps<{ products: PaginationProps<Product> }>) {
    return (
        <RootLayout name="" descreption="" logo="">
            <Head title="Home"/>
            <div className="my-4">
                <Slider/>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 p-8">
                    {products.data.map( product=> (
                        <ProductItem product={product} key={product.id}/>
                    ))}
                </div>
                {/*<div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">*/}
                {/*    <h1 className="text-2xl mb-14">Featured Products</h1>*/}
                {/*    <ProductList/>*/}
                {/*</div>*/}

                {/*<div className="mt-24">*/}
                {/*    <h1 className="text-2xl mb-14 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">*/}
                {/*        Categories*/}
                {/*    </h1>*/}
                {/*    <CategoryList/>*/}
                {/*</div>*/}

                {/*<div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">*/}
                {/*    <h1 className="text-2xl mb-14">New Products</h1>*/}
                {/*    <ProductList/>*/}
                {/*</div>*/}
            </div>
        </RootLayout>
    );
}

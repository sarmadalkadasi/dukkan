import CategoryList from "@/components/store/CategoryList"
import ProductList from "@/components/store/ProductList"
import Slider from "@/components/store/Slider"
import { Head, useForm } from '@inertiajs/react';
import RootLayout from '@/layouts/store-layout'


const Home = () => {
  return (
    <RootLayout name="" descreption="" logo=""> 
    <Head title="Home" />
    <div className="my-4" >
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl mb-14">
        Featured Products
        </h1>
      {/* <ProductList/> */}
      </div>
      <div className="mt-24">
        <h1 className="text-2xl mb-14 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        Categories
        </h1>
      {/* <CategoryList/> */}
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl mb-14">
        New Products
        </h1>
      {/* <ProductList /> */}
      </div>
    </div>
    </RootLayout>
  )
}

export default Home
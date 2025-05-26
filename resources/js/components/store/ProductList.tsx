import ProductItem from "./ProductItem"

const ProductList = () => { //{ storeId }: { storeId: number }
  //const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await fetch(`/api/store/${storeId}/products`);
  //     const data = await response.json();
  //     setProducts(data);
  //   };

  //   fetchProducts();
  // }, [storeId]);

  return (
    <div className="flex flex-wrap gap-x-8 gap-y-16 justify-between">
        {/*<ProductItem/>*/}
        {/*<ProductItem/>*/}
        {/*<ProductItem/>*/}
        {/*<ProductItem/>*/}
        {/* {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))} */}

    </div>
  )
}

export default ProductList

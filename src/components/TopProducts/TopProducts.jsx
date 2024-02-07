import { useEffect } from "react";
import ButtonLink from "../ButtonLink/ButtonLink"
import useGetProducts from "../ProductFetch/useGetProducts"
import SectionTitle from "../SectionTitle/SectionTitle"
import Product from "../Product/Product";

const TopProducts = () => {
  const { products, getTopProducts } = useGetProducts();
  useEffect(() => {
    getTopProducts()
  }, [])
  return (<>
    <div className="container mx-auto mb-10">
      <div className="flex items-center justify-between">
        <SectionTitle text={"Top products"} />
        <ButtonLink path={'/about'} text={"see more"} isMain={true} />
      </div>


      <div className="flex flex-wrap" >
        {
          products.map(product => (
            <Product key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand}
              imgUrl={product.api_featured_image}
              price={product.price}
              currency={product.price_sign}
            />
          ))
        }
      </div>


    </div>

  </>)
}
export default TopProducts

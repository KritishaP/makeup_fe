import { useEffect } from "react";
import ButtonLink from "../ButtonLink/ButtonLink"
import SectionTitle from "../SectionTitle/SectionTitle"
import ProductCard from "../ProductCard/ProductCard";
import useGetProducts from "../../ProductFetch/useGetProducts";

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
            <ProductCard key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand}
              imgUrl={product.api_featured_image}
              price={product.price}

            />
          ))
        }
      </div>


    </div>

  </>)
}
export default TopProducts

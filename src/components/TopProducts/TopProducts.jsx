
import ButtonLink from "../ButtonLink/ButtonLink"
import SectionTitle from "../SectionTitle/SectionTitle"
import ProductCard from "../ProductCard/ProductCard";
import useGetTopProducts from "../../ProductFetch/useGetTopProducts";
import Loader from "../loader/loader";

const TopProducts = () => {
  const { products } = useGetTopProducts();

  return (<>
    <div className="container mx-auto mb-10">
      <div className="flex items-center justify-between">
        <SectionTitle text={"Top products"} />
        <ButtonLink path={'/search'} text={"see more"} isMain={true} className={"hidden md:block"} />
      </div>

      <div className="flex flex-wrap mt-4 justify-center" >
        {
          products.length === 0 ? (
            <Loader />
          ) : (
            <>
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
              }</>

          )
        }

      </div>


    </div>

  </>)
}
export default TopProducts

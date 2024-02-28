import useGetRecommendedProducts from "../../ProductFetch/useGetRecommendedProducts"
import ProductCard from "../ProductCard/ProductCard"
import SectionTitle from "../SectionTitle/SectionTitle"
import Loader from "../loader/loader"

const RecommendedProducts = ({ product }) => {
  const products = useGetRecommendedProducts(product)

  return (<>
    <SectionTitle text={"For You"} className={'text-xl'} />
    {
      products.length === 0 ? (
        <Loader />
      ) :
        (
          <div className="flex flex-wrap">
            {products.map((item) => (
              <ProductCard key={item.id}
                id={item.id}
                name={item.name}
                brand={item.brand}
                imgUrl={item.api_featured_image}
                price={item.price} />
            ))}
          </div>
        )
    }

  </>)
}
export default RecommendedProducts
import useGetRecommendedProducts from "../../ProductFetch/useGetRecommendedProducts"
import ProductCard from "../ProductCard/ProductCard"
import SectionTitle from "../SectionTitle/SectionTitle"

const RecommendedProducts = ({ product }) => {
  const products = useGetRecommendedProducts(product)
  if (products.length === 0) return null
  return (<>
    <SectionTitle text={"For You"} />

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
  </>)
}
export default RecommendedProducts
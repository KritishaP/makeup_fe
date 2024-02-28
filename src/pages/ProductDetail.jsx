
import { useLocation } from "react-router-dom";
import useGetProducts from "../ProductFetch/useGetProducts"

import { Benefits, ProductPreview, ProductTitle, RecommendedProducts } from "../components";
import { useLayoutEffect } from "react";
import Loader from "../components/loader/loader";



const ProductDetail = () => {
  const location = useLocation();
  const { singleProduct, loading } = useGetProducts();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

  }, [location.pathname]);

  if (!singleProduct) return <Loader />

  return (<>

    {loading ? <Loader /> : (
      <>
        <div className="mt-20 mb-20 container mx-auto rounded-md bg-white  p-4">

          <div className="mb-10 ">
            <ProductTitle name={singleProduct.name} isMain={false} />
          </div>
          <ProductPreview name={singleProduct.name} img={singleProduct.api_featured_image} type={singleProduct.product_type} category={singleProduct.category} price={singleProduct.price} description={singleProduct.description} />

        </div>


        <div className="container mx-auto ">
          <Benefits />
        </div>

        <div className="container mx-auto mb-20 bg-white">
          <RecommendedProducts product={singleProduct} />
        </div>
      </>
    )}






  </>)
}
export default ProductDetail
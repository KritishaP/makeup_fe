
import { useLocation } from "react-router-dom";
import useGetProducts from "../ProductFetch/useGetProducts"

import { Benefits, ProductPrice, ProductTitle, RecommendedProducts } from "../components";
import { useLayoutEffect } from "react";



const ProductDetail = () => {
  const location = useLocation();
  const { singleProduct } = useGetProducts();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

  }, [location.pathname]);

  if (!singleProduct) return <p>loading...</p>
  return (<>

    <div className="mt-20 container mx-auto rounded-md bg-white  p-4">

      <div className="mb-10 ">
        <ProductTitle name={singleProduct.name} isMain={false} />

      </div>

      <div className="flex mb-10">
        <div className=" flex items-center justify-center w-screen mb-10 ">
          <img src={`https://${singleProduct.api_featured_image}`} alt={singleProduct.name} />
        </div>


        <div >
          <p className="text-orange-400 font-krona text-sm">{singleProduct.product_type.replace(/_/g, ' ')}</p>
          <ProductTitle name={singleProduct.name} isMain={true} />


          <p>{singleProduct.category}</p>
          <div className="flex my-10 justify-between">
            <ProductPrice price={singleProduct.price} isLarge={true} />


            <div>
              Counter
            </div>

            <button className=" inline-block rounded-full font-light font-krona py-2  text-xs px-10    hover:bg-transparent hover:text-dark transition-all duration-300 ease-in-out  mb-3 bg-orange-300 md:font-semibold   ">Add to cart</button>
          </div>

          <p dangerouslySetInnerHTML={{ __html: singleProduct.description }}  ></p>
        </div>
      </div>




      <Benefits />
      <RecommendedProducts product={singleProduct} />


    </div>



  </>)
}
export default ProductDetail
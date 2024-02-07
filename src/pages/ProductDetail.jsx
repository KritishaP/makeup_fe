import { useParams } from "react-router-dom"
import useGetProducts from "../ProductFetch/useGetProducts"
import { useEffect } from "react";
import { ProductPrice, ProductTitle } from "../components";


const ProductDetail = () => {
  const { id } = useParams()
  const { singleProduct, getSingleProduct } = useGetProducts();
  useEffect(() => {
    getSingleProduct(id)
  }, [])

  if (!singleProduct) return <p>loading...</p>
  return (<>

    <div className="mt-20 container mx-auto bg-white h-screen p-4">

      <div className="mb-10 ">
        <ProductTitle name={singleProduct.name} isMain={false} />

      </div>

      <div className="flex mb-10">
        <div className=" flex items-center justify-center w-screen mb-10">
          <img src={`https://${singleProduct.api_featured_image}`} alt={singleProduct.name} />
        </div>


        <div >
          <p className="text-orange-400 font-krona text-sm">{singleProduct.product_type}</p>
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


      {/*<div className="flex flex-wrap" >
        {
          products.map(product => (
            <Product key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand}
              imgUrl={product.api_featured_image}
              price={product.price}

            />
          ))
        }
      </div> */}


    </div>


  </>)
}
export default ProductDetail
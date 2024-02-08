import { NavLink } from "react-router-dom"
import ProductPrice from "../ProductPrice/ProductPrice"


const ProductCard = ({ id, name, brand, imgUrl, price, }) => {
  return (<>
    <NavLink to={`/product/${id}`} className="flex flex-col items-center mr-6 mb-2 rounded-md hover:shadow-2xl hover:scale-105 transition-all ease-in-out duration-500 bg-white px-4 py-6 ">
      <div className="flex flex-1 mb-3 flex-col justify-center">
        <img src={`https://${imgUrl}`} width={150} alt="" className="mx-auto " />
      </div>

      <div>
        <p className="font-krona text-sm text-orange-400">{name.replace(/^(.{12}[^\s]*).*/, "$1")}</p>
        <p>{brand}</p>

        <ProductPrice price={price} />
      </div>



    </NavLink>



  </>)
}
export default ProductCard
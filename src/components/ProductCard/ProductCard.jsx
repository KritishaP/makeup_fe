import { NavLink } from "react-router-dom"
import ProductPrice from "../ProductPrice/ProductPrice"


const ProductCard = ({ id, name, brand, imgUrl, price, }) => {
  return (<>
    <NavLink to={`/product/${id}`} className="mr-3 mb-2 rounded-md hover:shadow-2xl hover:scale-105 transition-all ease-in-out duration-500 bg-white px-4 py-6">
      <img src={`https://${imgUrl}`} width={150} alt="" className="mx-auto mb-3" />
      <p className="font-krona text-sm text-orange-400">{name}</p>
      <p>{brand}</p>

      <ProductPrice price={price} />


    </NavLink>



  </>)
}
export default ProductCard
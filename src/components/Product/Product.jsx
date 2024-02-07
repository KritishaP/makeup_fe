import { NavLink } from "react-router-dom"


const Product = ({ id, name, brand, imgUrl, price, currency }) => {
  return (<>
    <NavLink to={`/about/${id}`} className="mr-3 mb-2 rounded-md hover:shadow-2xl hover:scale-105 transition-all ease-in-out duration-500 bg-white px-4 py-6">
      <img src={`https://${imgUrl}`} width={150} alt="" className="mx-auto mb-3" />
      <p className="font-krona text-sm text-orange-400">{name}</p>
      <p>{brand}</p>
      <div className="relative">
        <div className=" absolute -z-1 bg-light-grey h-10 rounded-full top-0 w-10"></div>
        <p className="font-krona  pt-2 ml-4 text-sm md:text-md">{price}{currency}</p>

      </div>

    </NavLink>



  </>)
}
export default Product
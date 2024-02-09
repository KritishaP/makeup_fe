import { NavLink } from "react-router-dom"

const ButtonLink = ({ path, text, isMain, className }) => {
  return (<>
    <NavLink to={path} className={` py-2  text-sm font-light  font-krona  rounded-full hover:bg-transparent hover:text-dark transition-all duration-300 ease-in-out inline-block mb-3 ${isMain ? 'bg-orange-300 px-8 md:font-semibold ' : 'bg-dark text-white px-6'} ${className} `}>{text}</NavLink>
  </>)
}
export default ButtonLink
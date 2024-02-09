import { NavLink } from "react-router-dom"

const BrandLink = ({ className }) => {
  return (<>
    <NavLink to={'/'} className={` font-krona ${className}`}>Glamify</NavLink>
  </>)
}
export default BrandLink
import { NavLink } from "react-router-dom"
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

const NavTabs = () => {
  return (<>

    <li className='text-sm mx-7 my-5 md:my-0  hover:text-orange-600'>
      <NavLink to={'/'}>Home</NavLink>
    </li>

    <li className='text-sm mx-7 my-5  hover:text-orange-600 md:my-0'>
      <NavLink to={'/about'}>About</NavLink>

    </li>

    <li className='text-sm mx-7 my-5  hover:text-orange-600 md:my-0'>
      <NavLink to={'/search'}>Search</NavLink>
    </li>

    <li className='mx-7 my-5 md:my-0'>
      <HeartIcon className='h-6 w-6 inline  hover:text-orange-600 ' />
    </li>
    <li className=' mx-7 my-5 md:my-0'>
      <ShoppingBagIcon className='h-6 w-6 inline-block  hover:text-orange-600 ' />
    </li>
  </>)
}
export default NavTabs
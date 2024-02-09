import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import BrandLink from '../Brandlink/Brandlink'
import NavTabs from '../NavTabs/Navtabs'


const Navbar = () => {
  let [open, setOpen] = useState(false)
  return (<>

    <nav className='font-krona container mx-auto p-3 md:flex md:justify-between '>
      <div >
        <BrandLink className={"text-orange-600 text-2xl"} />
      </div>

      <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden'>
        {
          open ? <XMarkIcon className='h-6 w-6' /> : <Bars3Icon className='h-6 w-6' />
        }
      </div>

      <ul className={` md:flex md:items-center  md:pl-0 md:static pl-9 md:pb-0 pb-12 absolute md:z-auto left-0 w-full md:w-auto   bg-light-grey ${!open ? 'hidden' : 'visible'}`}>
        <NavTabs />
      </ul>




    </nav>
  </>)
}
export default Navbar
import { Bars3Icon, HeartIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const Navbar = () => {
  let [open, setOpen] = useState(false)
  return (<>
    {/* <nav className='font-krona md:flex md:justify-between p-3 container mx-auto'>
      <a href="/" className='text-2xl'>Glamify</a>

      <div className='flex items-end'>
        <a className='text-sm mr-8' href="/">Home</a>
        <a className='text-sm mr-8' href="/about">About</a>
        <a className='text-sm mr-8' href="/search">Search</a>


        <div className='flex'>
          <HeartIcon className='h-6 w-6' />
          <ShoppingBagIcon className='h-6 w-6 mr-4' />
        </div>
      </div>


    </nav>*/}

    <nav className='font-krona  p-3 md:flex md:justify-between '>
      <div >
        <a href="/" className='text-2xl text-orange-600'>Glamify</a>
      </div>
      <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden'>
        {
          open ? <XMarkIcon className='h-6 w-6' /> : <Bars3Icon className='h-6 w-6' />
        }
      </div>

      <ul className={` md:flex md:items-center  md:pl-0 md:static pl-9 md:pb-0 pb-12 absolute md:z-auto left-0 w-full md:w-auto   bg-light-grey ${!open ? 'hidden' : 'visible'}`}>
        <li className='text-sm mx-7 my-5 md:my-0  hover:text-orange-600'> <a href="/" >Home</a></li>
        <li className='text-sm mx-7 my-5  hover:text-orange-600 md:my-0'>
          <a href="/about" >About</a>
        </li>
        <li className='text-sm mx-7 my-5  hover:text-orange-600 md:my-0'>
          <a href="/search" >Search</a>
        </li>

        <li className='mx-7 my-5 md:my-0'>
          <HeartIcon className='h-6 w-6 inline  hover:text-orange-600 ' />
        </li>
        <li className=' mx-7 my-5 md:my-0'>
          <ShoppingBagIcon className='h-6 w-6 inline-block  hover:text-orange-600 ' />
        </li>
      </ul>




    </nav>
  </>)
}
export default Navbar
import React from 'react'

const Pricerange = ({ onChange }) => {

  let currentTimeout;

  const onChangeHandler = e => {
    clearTimeout(currentTimeout);

    currentTimeout = setTimeout(() => {
      onChange(e);
    }, 1500);
  };

  return (
    <div className='bg-gray-200  py-4 px-6'>
      <h4 className='font-krona text-sm mb-2'>select price</h4>
      <div className='flex '>
        <div className='text-center '>

          <input
            type="text"
            className='w-20 p-2 focus:ring-inset focus:ring-2 focus:ring-orange-300 caret-orange-300 outline-none text-center text-sm'
            placeholder='min'
            id='min'
            name='minPrice'
            onChange={onChangeHandler} />
          <label htmlFor="min" className='text-xs'>min</label>

        </div>
        <hr className='border border-orange-300 w-full mt-4 ' />

        <div className='text-center '>

          <input
            type="text"
            className='w-20 p-2 focus:ring-inset focus:ring-2 focus:ring-orange-300 caret-orange-300 outline-none text-center text-sm'
            placeholder='max'
            name='maxPrice'
            id='max'
            onChange={onChangeHandler} />
          <label htmlFor="max" className='text-xs'>max</label>
        </div>

      </div>
    </div>
  )
}

export default Pricerange

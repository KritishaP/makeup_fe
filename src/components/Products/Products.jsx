import React from 'react'
import Loader from '../loader/loader'
import ProductCard from '../ProductCard/ProductCard'
import { useSearchState } from '../../state/search-context'

const Products = () => {
  const [{ products }] = useSearchState();
  return (
    <div className="flex flex-wrap mt-4 justify-center" >
      {
        products.length === 0 ? (
          <Loader />
        ) : (
          <>
            {
              products.map(product => (
                <ProductCard key={product.id}
                  id={product.id}
                  name={product.name}
                  brand={product.brand}
                  imgUrl={product.api_featured_image}
                  price={product.price}

                />
              ))
            }</>

        )
      }

    </div>
  )
}

export default Products

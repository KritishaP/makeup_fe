import axios from "axios"
import { useEffect, useState } from "react"

const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products'
const product_count = 5;
const useGetRecommendedProducts = product => {
  const [products, setProducts] = useState([])


  const key = product.product_type ? 'product_type' : 'brand';
  const value = product.product_type ? product.product_type : product.brand;

  const getRecommendedProducts = () => {
    axios.get(`${BASE_URL}.json`,
      {
        params: {
          [key]: value,
        }
      }
    ).then(response => {
      const { data } = response;
      data.length = data.length > product_count ? product_count : data.length

      setProducts(data)
    })
  };

  useEffect(() => {
    if (!products) return;
    getRecommendedProducts();
  }, [])

  return products;


}






export default useGetRecommendedProducts
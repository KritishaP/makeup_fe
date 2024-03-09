import axios from "axios"
import { useEffect, useState } from "react"
import { PRODUCT_TAGS } from "../constants/Tags"

const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products'


const product_count = 8;
const getRandomProductTag = () => {
  const randomNumber = Math.floor(Math.random() * PRODUCT_TAGS.length)

  return PRODUCT_TAGS[randomNumber]
}

const useGetTopProducts = () => {
  const [products, setProducts] = useState([])

  const getTopProducts = () => {
    axios.get
      (`${BASE_URL}.json`,
        {
          params: {
            product_tags: getRandomProductTag(),

          }
        })
      .then(response => {
        const { data } = response;
        data.length = data.length > product_count ? product_count : data.length;
        setProducts(data)
      })
  }

  useEffect(() => {
    getTopProducts()
  }, []);

  return {
    products,

  }
}
export default useGetTopProducts
import axios from "axios"
import { useEffect, useState } from "react"
//import { PRODUCT_TAGS } from "../constants/Tags"

const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products'

const useSearch = () => {
  const [products, setProducts] = useState([])
  const getProducts = params => {
    setProducts([])
    axios.get
      (`${BASE_URL}.json`, {
        params,
      })
      .then(response => {
        const { data } = response;
        setProducts(data)
      })
  }

  const setFilter = (type, value) => {
    const params = {
      [type]: value,
    }
    getProducts(params)
  }
  useEffect(() => {
    getProducts()
  }, []);
  return { products, setFilter };

}
export default useSearch
import axios from "axios"
import { useEffect, useState } from "react"


const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products'
const productTags = ['Canadian',
  'CertClean',
  'Chemical Free',
  'Dairy Free',
  'EWG Verified',
  'EcoCert',
  'Fair Trade',
  'Gluten Free',
  'Hypoallergenic',
  'Natural',
  'No Talc',
  'Non-GMO',
  'Organic',
  'Peanut Free Product',
  'Sugar Free',
  'USDA Organic',
  'Vegan',
  'alcohol free',
  'cruelty free',
  'oil free',
  'purpicks',
  'silicone free',
  'water free']

const product_count = 8;
const getRandomProductTag = () => {
  const randomNumber = Math.floor(Math.random() * productTags.length)

  return productTags[randomNumber]
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
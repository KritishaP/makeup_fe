import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products'
const useGetProducts = () => {
  const { id } = useParams()

  const [singleProduct, setSingleProduct] = useState(null)
  const [loading, setLoading] = useState(false)

  const getSingleProduct = useCallback(() => {
    setLoading(true)
    axios.get(`${BASE_URL}/${id}.json`).then(response => {
      setSingleProduct(response.data)
    })
  }, [id])

  useEffect(() => {
    //if (!singleProduct) {
    getSingleProduct();
    //}
  }, [id, getSingleProduct]);

  useEffect(() => {
    setLoading(false)
  }, [singleProduct])
  return {
    loading,
    singleProduct
  }
}
export default useGetProducts
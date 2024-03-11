import useSearch from "../../ProductFetch/useSearch"
import Products from "../Products/Products"
import Sidebar from "../Sidebar/Sidebar"
import Loader from "../loader/loader"

const SearchComponent = () => {
  const { isLoading } = useSearch();
  return (
    <div className="search">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="results">
        {isLoading ? <Loader /> : <Products />}

      </div>

    </div>

  )
}

export default SearchComponent

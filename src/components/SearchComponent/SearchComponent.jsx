import useSearch from "../../ProductFetch/useSearch"
import Products from "../Products/Products"
import Sidebar from "../Sidebar/Sidebar"
import Topbar from "../Topbar/Topbar"

const SearchComponent = () => {
  const { setFilter } = useSearch()

  return (
    <div className="search">
      <div className="sidebar">
        <Sidebar setFilter={setFilter} />
      </div>
      <div className="topbar">
        <Topbar setFilter={setFilter} />
      </div>
      <div className="results">
        <Products />
      </div>

    </div>

  )
}

export default SearchComponent

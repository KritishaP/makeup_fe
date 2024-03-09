
import useSearch from "../ProductFetch/useSearch"
import { Sidebar, Topbar } from "../components"
import Products from "../components/Products/Products"


const Search = () => {
  const { products, setFilter } = useSearch()

  return (<>

    <div className="search">
      <div className="sidebar">
        <Sidebar setFilter={setFilter} />
      </div>
      <div className="topbar">
        <Topbar setFilter={setFilter} />
      </div>
      <div className="results">
        <Products products={products} />
      </div>
    </div>

  </>)
}
export default Search
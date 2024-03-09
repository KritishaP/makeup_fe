import useSearch from "../ProductFetch/useSearch"
import SearchComponent from "../components/SearchComponent/SearchComponent"
import SearchProvider, { useSearchState } from "../state/search-context"


const Search = () => {
  return (<>
    <SearchProvider>
      <SearchComponent />
    </SearchProvider>
  </>)
}


export default Search
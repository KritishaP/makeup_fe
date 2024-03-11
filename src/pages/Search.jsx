import SearchComponent from "../components/SearchComponent/SearchComponent"
import SearchProvider from "../state/search-context"


const Search = () => {
  return (<>
    <SearchProvider>
      <SearchComponent />
    </SearchProvider>
  </>)
}


export default Search
import { searchReducer } from "./search-reducer";
import { initialSearchState } from "./search-state";
import { createContext, useContext, useReducer } from "react";

const SearchStateContext = createContext('searchState');

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, { ...initialSearchState });

  return <SearchStateContext.Provider value={[state, dispatch]}>{children}</SearchStateContext.Provider>;
};

const useSearchState = () => {
  const context = useContext(SearchStateContext);

  return context;
};

export { useSearchState };

export default SearchProvider;
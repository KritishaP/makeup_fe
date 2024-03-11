import { Brands } from "../../constants/Brands"
import { setFilter } from "../../state/actionCreator"
import { useSearchState } from "../../state/search-context"
import CategoriesBar from "../CategoriesBar/CategoriesBar"
import Dropdown from "../Dropdown/Dropdown"
import Pricerange from "../Pricerange/Pricerange"

const Sidebar = () => {
  const [state, dispatch] = useSearchState()

  const handleOnChange = (e) => {
    const { name, value } = e.target
    dispatch(setFilter(name, value));
  }
  const handleOnSelect = value => {
    dispatch(setFilter('productType', value));
  };
  return (
    <>
      <div className="pl-6" >
        <Pricerange onChange={handleOnChange} />
        <Dropdown type='brand' values={['All', ...Brands]} onChange={handleOnChange} />
        <CategoriesBar onSelect={handleOnSelect} />
      </div>
    </>
  )
}

export default Sidebar


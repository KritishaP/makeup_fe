import Dropdown from "../Dropdown/Dropdown"
import { Brands } from "../../constants/Brands"
import { Sorting } from "../../constants/Sorting"


const Topbar = ({ setFilter }) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFilter(name, value)

  }
  return (
    <div className="flex space-x-4">
      <Dropdown type='brand' values={['All', ...Brands]} onChange={handleOnChange} />
      <Dropdown type="sort" values={Sorting} onChange={handleOnChange} />

    </div>
  )
}

export default Topbar

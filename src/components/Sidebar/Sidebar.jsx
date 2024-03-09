import CategoriesBar from "../CategoriesBar/CategoriesBar"
import Pricerange from "../Pricerange/Pricerange"



const Sidebar = ({ setFilter }) => {
  return (
    <>

      <div className="pl-6" >
        <Pricerange />
        <CategoriesBar setFilter={setFilter} />


      </div>
    </>

  )
}

export default Sidebar


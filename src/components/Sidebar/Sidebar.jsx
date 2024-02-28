import CategoriesBar from "../CategoriesBar/CategoriesBar"
import Pricerange from "../Pricerange/Pricerange"



const Sidebar = () => {
  return (
    <>

      <div className="pl-6" >
        <Pricerange />
        <CategoriesBar />


      </div>
    </>

  )
}

export default Sidebar


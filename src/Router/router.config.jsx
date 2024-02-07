import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeLayout from "../layouts/home.layout"
import { About, Home, ProductDetail, Search } from "../pages"

const Routing = () => {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>


      </Routes>



    </BrowserRouter>

  </>)
}
export default Routing
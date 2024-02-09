import { Outlet } from "react-router-dom"
import { Navbar, Footer, CopyrightSection } from "../components"

const HomeLayout = () => {
  return (<>

    <Navbar />
    <Outlet />
    <Footer />
    <CopyrightSection />

  </>)
}
export default HomeLayout
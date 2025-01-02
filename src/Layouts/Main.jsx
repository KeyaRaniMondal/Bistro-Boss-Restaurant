import { Outlet, useLocation } from "react-router-dom"
import Footer from "../shared/footer"
import Navbar from "../Navbar/navbar"

 const Main = () => {
    const location=useLocation()
    console.log(location)
    const noHeaderFooter=location.pathname.includes('login')
return(
    <div>
        {noHeaderFooter || <Navbar></Navbar>}
     <Outlet></Outlet>
    {noHeaderFooter || <Footer></Footer>}
 </div>
)
}
export default Main
import { Outlet } from "react-router-dom"
import Footer from "../shared/footer"
import Navbar from "../Navbar/navbar"

 const Main = () => {
return(
    <div>
        <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
 </div>
)
}
export default Main
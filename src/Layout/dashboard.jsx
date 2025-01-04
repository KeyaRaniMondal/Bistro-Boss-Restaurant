import { NavLink, Outlet } from "react-router-dom"

const Dashboard=()=>{
    return(
        <div>
            <div className="w-64 bg-orange-300">
            <ul className="menu">
                <li>
                    <NavLink to="/dashboard/cart">myCart</NavLink>
                </li>
            </ul>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default Dashboard
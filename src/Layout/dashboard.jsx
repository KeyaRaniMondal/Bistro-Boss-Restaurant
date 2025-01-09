import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard=()=>{
    const [cart]=useCart()
   const isAdmin=true
    return(
        <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-orange-400">
            <ul className="menu p-4">
            {isAdmin ?
                <>
                <li>
                    <NavLink to="/dashboard/adminHome">
                        <FaHome></FaHome>
                        Admin Home</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/userHome">
                        <FaHome></FaHome>
                        User Home</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/addItems">
                        <FaCalendar></FaCalendar>
                        Add Items</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/manageItem">
                        <FaShoppingCart></FaShoppingCart>
                        Manage Item</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/users">
                        <FaAd></FaAd>
                       All Users</NavLink>
                </li>
                <div className="divider"></div>
                <li>
                    <NavLink to="/">
                        <FaHome></FaHome>
                        Home</NavLink>
                </li>
                <li>
                    <NavLink to="/order/salad">
                        <FaSearch></FaSearch>
                        Menu</NavLink>
                </li>
                </> :
                <>
                <li>
                    <NavLink to="/dashboard/userHome">
                        <FaHome></FaHome>
                        User Home</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/reservation">
                        <FaCalendar></FaCalendar>
                        Reservation</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/cart">
                        <FaShoppingCart></FaShoppingCart>
                        My Cart ({cart.length})</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/review">
                        <FaAd></FaAd>
                        Add a Review</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/bookings">
                        <FaList></FaList>
                        My Bookings</NavLink>
                </li>
                <div className="divider"></div>
                <li>
                    <NavLink to="/">
                        <FaHome></FaHome>
                        Home</NavLink>
                </li>
                <li>
                    <NavLink to="/order/salad">
                        <FaSearch></FaSearch>
                        Menu</NavLink>
                </li>
                </>}
            </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
            <Outlet></Outlet>
        </div>
    </div>
    )
}
export default Dashboard
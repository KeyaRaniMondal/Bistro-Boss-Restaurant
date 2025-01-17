import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/dashboard";
import Cart from "../pages/dashboard/Dashboard/cart/cart";
import SignUp from "../Pages/signUp/signup";
import AllUser from "../pages/dashboard/AllUsers/allUser";
import AddItem from "../pages/dashboard/Dashboard/AddItem/addItems";
import AdminRoute from "./adminRoute";
import Payment from "../pages/dashboard/payment/payment";
import AdminHome from "../pages/dashboard/AdminHome/adminHome";
import UserHome from "../pages/dashboard/UserHome/userHome";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path: 'menu', 
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>,
      children:[
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'cart',
          element:<Cart></Cart>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'adminHome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>

        },
        {
          path:'addItems',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path:'users',
          element:<AdminRoute><AllUser></AllUser></AdminRoute>
        }
      ]
    }
  ]);
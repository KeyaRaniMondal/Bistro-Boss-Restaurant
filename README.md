- set router:

1. in main.jsx
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

2. in router.jsx that is created in a folder Routes

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);

3. in Main.jsx in layouts folder 

 const Main = () => {
return(
    <div>
     <Outlet></Outlet>
     <Footer></Footer>
 </div>
)
}
export default Main
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/AboutUs/About";




    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout></MainLayout>,
          children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/health.json')
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ()=> fetch('/health.json')
            },
            {
              path: "/login",
              element: <Login></Login>
            },
            {
              path:"/register",
              element:<Register></Register>
            },
            {
              path:"/about",
              element:<About></About>
            }
          ]
        },
      ]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/AboutUs/About";
import OurTeam from "../Pages/TeamMember/OurTeam";
import Contact from "../Pages/Contact/Contact";
import OurBlog from "../Pages/OurBlog/OurBlog";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";




    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout></MainLayout>,
          errorElement:<ErrorPage></ErrorPage>,
          children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/health.json')
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
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
            },
            {
              path:"/team",
              element:<OurTeam></OurTeam>
            },
            {
              path:"/contact",
              element: <PrivateRoute><Contact></Contact></PrivateRoute>
            },
            {
              path:"/blog",
              element:<OurBlog></OurBlog>
            }
          ]
        },
      ]);

export default router;
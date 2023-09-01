import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Main from "../Layous/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layous/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../Layous/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout/>,
    children: [
      {
        path: '/',
        element: <Navigate to={'/category/0'}/>
      },
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/register',
        element: <Register/>,
      },
      {
        path: '/terms',
        element: <Terms/>
      }
    ]
  },
  {
    path: "category",
    element: <Main />,
    children: [
      {
        path: ":id",
        element: <Category />,
        loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <PrivateRoute><News/></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
      },
    ],
  },
]);

export default router;

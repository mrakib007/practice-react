import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layous/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layous/NewsLayout";
import News from "../pages/News/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Category />,
        loader: () => fetch('http://localhost:5000/news')
      },
      {
        path: "category/:id",
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
        element: <News/>,
        loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
      },
    ],
  },
]);

export default router;

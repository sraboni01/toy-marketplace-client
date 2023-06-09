import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./component/Layout/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProviders from "./providers/AuthProviders";
import Home from "./component/Pages/Home/Home";
import Login from "./component/Pages/Login/Login";
import Register from "./component/Pages/Register/Register";
import Error from "./component/Pages/Error/Error";
import Blog from "./component/Pages/Home/Blog/Blog";
import AddToy from "./component/Pages/AddToy/AddToy";
import MyToys from "./component/Pages/MyToys/MyToys";
import AllToys from "./component/Pages/AllToys/AllToys";
import EditToy from "./component/Pages/EditToy/EditToy";
import Details from "./component/Details/Details";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addtoys",
        element: <AddToy></AddToy>,
      },
      {
        path: "/mytoys",
        element: <MyToys></MyToys>,
        loader: () => fetch("https://y-mbbxolfp7-sraboni01.vercel.app/toy"),
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://y-mbbxolfp7-sraboni01.vercel.app/toy"),
      },
      {
        path: "/edit/:id",
        element: <EditToy></EditToy>,
        loader: ({ params }) =>
          fetch(`https://y-mbbxolfp7-sraboni01.vercel.app/toy/${params.id}`),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`https://y-mbbxolfp7-sraboni01.vercel.app/toy/${params.id}`),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);

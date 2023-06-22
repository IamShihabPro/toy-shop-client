import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import ToysDetails from "../pages/AllToys/ToysDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import Category from "../components/Category/Category";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        // loader: ()=>  fetch('https://toy-shop-server-gilt.vercel.app/alltoys')
      },
      {
        path: "/addtoys",
        element: <AddToys></AddToys>,
      },
      {
        path: "/mytoys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/toysDetails",
        element: <ToysDetails></ToysDetails>,
      },

      {
        path: "/toysDetails/:id",
        element: (
          <PrivateRoutes>
            {" "}
            <ToysDetails></ToysDetails>{" "}
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-shop-server-gilt.vercel.app/alltoys/${params.id}`),
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
        path: "/updatetoy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`https://toy-shop-server-gilt.vercel.app/alltoys/${params.id}`),
      },
      {
        path: "/category",
        element: <Category></Category>,
      },
    ],
  },
]);

export default router;

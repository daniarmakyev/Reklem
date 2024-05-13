import React from "react";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainStyles/MainLaout";
import MainPage from "../pages/MainPage/MainPage";
import Catalog from "../pages/Catalog/Catalog";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";


export const router = createBrowserRouter([
  {
     id: "root",
    // errorElement: <Error />,
    element: <MainLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLaout";
import MainPage from "../pages/MainPage/MainPage";
import Catalog from "../pages/Catalog/Catalog";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import NotFoundPage from "../pages/NotFountPage/NotFoundPage";
import AboutCompany from "../pages/AboutCompany/AboutCompany";

export const router = createBrowserRouter([
  {
    id: "root",
    // errorElement: <Error />,
    element: <MainLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/register", element: <Register /> },
      { path: "*", element: <NotFoundPage /> },
      { path: "/login", element: <Login /> },
      { path: "/aboutCompany", element: <AboutCompany /> },
    ],
  },
]);

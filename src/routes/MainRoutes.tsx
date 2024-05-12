import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../MainLayout/MainLaout";
import MainPage from "../pages/MainPage/MainPage";
import Catalog from "../pages/Catalog/Catalog";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<MainPage/>} />
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Route>
    </Routes>
  );
};

export default MainRoutes;
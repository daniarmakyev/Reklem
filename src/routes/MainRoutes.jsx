import React from "react";
import { Route, Routes } from "react-router-dom";
import NoneFound from "../pages/NoneFoundPage/NoneFound";
import MainLayout from "../MainLayout/MainLaout";
import MainPage from "../pages/MainPage/MainPage";
import Catalog from "../pages/CatalogPage/Catalog/Catalog";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<MainPage/>} />
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="*" element={<NoneFound/>} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
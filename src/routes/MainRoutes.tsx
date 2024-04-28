import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../MainLayout/MainLaout";
import MainPage from "../pages/MainPage/MainPage";
import Catalog from "../pages/Catalog/Catalog";
import MoreDetails from "../pages/Catalog/CatalogDetails/MoreDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<MainPage/>} />
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/detail:id" element={<MoreDetails/>}/>
      </Route>
    </Routes>
  );
};

export default MainRoutes;
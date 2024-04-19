import React from "react";
import { Route, Routes } from "react-router-dom";
import NoneFound from "../pages/NoneFoundPage/NoneFound";
import MainLayout from "../MainLayout/MainLaout";
import MainPage from "../pages/MainPage/MainPage";
import Catalog from "../pages/CatalogPage/Catalog/Catalog";
import AddCard from "../pages/CatalogPage/AddCard/AddCard";
import EditCard from "../pages/CatalogPage/EditCard/EditCard";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<MainPage/>} />
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="*" element={<NoneFound/>} />
        <Route path="/addCard" element={<AddCard/>}/>
        <Route path="/edit/:id" element={<EditCard/>}/>
      </Route>
    </Routes>
  );
};

export default MainRoutes;
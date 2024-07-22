import React from "react";
import { Link } from "react-router-dom";
import CatalogTop from "./CatalogTop/CatalogTop";
import Category from "./Category/Category";
import CatalogList from "./CatalogList/CatalogList";
import QuestionsFooter from "../../components/QuestionsFooter/QuestionsFooter";

const Catalog = () => {
  return (
    <div>
      <CatalogTop />
      <Category />
      <CatalogList />
      <QuestionsFooter />
    </div>
  );
};

export default Catalog;

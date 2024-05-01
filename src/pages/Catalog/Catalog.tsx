import React from 'react'
import { Link } from 'react-router-dom'
import CatalogTop from './CatalogTop/CatalogTop'
import Category from './Category/Category'
import CatalogList from './CatalogList/CatalogList'

const Catalog = () => {
  return (
    <div>
        <CatalogTop/>
        <Category/>
        <CatalogList/>
    </div>
  )
}

export default Catalog

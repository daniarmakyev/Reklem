import React, { useContext } from 'react'
import styles from "./Catalog.module.css"
import GreenButton from '../../../components/Green-Button/GreenButton'
import { Link } from 'react-router-dom'
import { mainContext } from '../../../context/MainContext'
import Cards from '../../../components/Cards/Cards'

const Catalog = () => {
  const { createProduct, products } = useContext(mainContext);
  console.log(products);
  return (
    <div className={styles.catalogContainer}>
        <div className="container">
          <Link to={'/addCard'} className={styles.addCard}><GreenButton>Добавить</GreenButton></Link>

          <div className={styles.catalog}>
           {products.map((item) => (
           <Cards key={item.id} item={item}/>
           ))} 
          </div>
        </div>
    </div>
  )
}

export default Catalog

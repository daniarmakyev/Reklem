import React from 'react'
import styles from "./Catalog.module.css"
import GreenButton from '../../../components/Green-Button/GreenButton'
import { Link } from 'react-router-dom'

const Catalog = () => {
  return (
    <div>
        <div className="container">
          <Link to={'/addCard'} className={styles.addCard}><GreenButton>Добавить</GreenButton></Link>
        </div>
    </div>
  )
}

export default Catalog

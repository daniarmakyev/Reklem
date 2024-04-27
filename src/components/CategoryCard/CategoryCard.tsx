import React, { ReactNode } from 'react'
import styles from "./categoryCard.module.css"
import { Link } from 'react-router-dom'

interface CategoryCard {
  children: ReactNode ; 
}
const CategoryCard = ({ children }: CategoryCard):JSX.Element => {
  return (
    <div className={styles.card}>
        <Link to={'/'}>{children}
        </Link>
    </div>
  )
}

export default CategoryCard



import React from 'react'
import styles from "./cards.module.css"
import RedButton from "../RedButton/RedButton"
import GreenButton from '../Green-Button/GreenButton'
import { Link } from 'react-router-dom'
const Cards = ({item}) => {
  return (
    <div className={styles.card}>
        <h2>{item.name}</h2>
        <img src={item.imageUrl} alt="" className={styles.image}/>
        <p>Описание:{item.description}ы</p>
        <p>Цена:{item.price} Собак</p>
        <GreenButton><Link   to={`/edit/${item.id}`}>Изменить</Link></GreenButton>
        <RedButton>Удалить</RedButton>
    </div>
  )
}

export default Cards
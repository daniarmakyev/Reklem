import React, { useContext } from 'react'
import styles from "./cards.module.css"
import RedButton from "../RedButton/RedButton"
import GreenButton from '../Green-Button/GreenButton'
import { Link } from 'react-router-dom'
import { mainContext } from '../../context/MainContext'
const Cards = ({item}) => {
  const {deleteProduct} = useContext(mainContext);
  return (
    <div className={styles.card}>
        <h2>{item.name}</h2>
        <img src={item.imageUrl} alt="" className={styles.image}/>
        <p>Описание:{item.description}</p>
        <p>Цена:{item.price} Собак</p>
        <GreenButton><Link   to={`/edit/${item.id}`}>Изменить</Link></GreenButton>
        <button className={styles.btn} onClick={() => {deleteProduct(item.id)}}><RedButton   >Удалить</RedButton ></button>
    </div>
  )
}

export default Cards
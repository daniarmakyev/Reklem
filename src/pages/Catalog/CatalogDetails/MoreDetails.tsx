import React from 'react'
import styles from "./moreDetail.module.css"
import { Link, useLocation } from 'react-router-dom';

const MoreDetails = () => {

  const location = useLocation();
  const { name, price, color, desc, size, weight, material ,thirdImage,seecondImage,image,fourthImage} = location.state;

  return (
    <div className={styles.container}>
      <div className={styles.dateilTop}>
          <p className={styles.miniNav}><Link to="/">Главная</Link>/<Link to={'/catalog'}>Каталог</Link>/</p>
      </div>

        <div className={styles.mainInfo}>
          <div className={styles.images}>
            <img className={styles.bigImg} src={seecondImage} alt="cupImage" />
            <div className={styles.imagesMini}>
              <img className={styles.miniImageOne} src={thirdImage} alt="" />
              <img src={fourthImage} alt="" />
            </div>
          </div>

          <div className={styles.rightSide}>
            <ul className={styles.rightList}>
              <li className={styles.productName}>{name}</li>
              <li className={styles.productColor}>Расцветка : {color}</li>
              <li className={styles.price}>Цена за 1 шт : {price} ₽</li>
              <button className={styles.basket}>В корзину</button>
            </ul>
          </div>

        </div>

        <div className={styles.about}>
          <span className={styles.desc}>Описание</span>
          <p className={styles.bigDesc}>{desc}</p>
          <ul className={styles.descList}>
            <li>Размеры: <span>{size}</span></li>
            <li>Материал: <span>{material}</span></li>
            <li>Вес: <span>{weight}</span></li>
          </ul>
        </div>

    </div>
  )
}

export default MoreDetails

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./catalogTop.module.css";
import Category from "../Category/Category";
import CatalogList from "../CatalogList/CatalogList";

const CatalogTop = () => {
  const [expanded, setExpanded] = useState(false);
  const [icon, setIcon] = useState("down");
  const toggleExpand = () => {
    setExpanded(!expanded);
    setIcon(!expanded ? "up" : "down");
  };

  return (
    <div className={styles.catalogTop}>
      <div className="container">
        <Link to={"/"} className={styles.link}>
          Главная /
        </Link>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h1 className={styles.title}>Каталог</h1>

            <p
              className={`${styles.desc} ${
                (!expanded || styles.visible) && styles.visible
              }`}
            >
              Каталог нашего магазина предлагает широкий выбор кастомных принтов на самые
              разные поверхности: от футболок и худи до кружек и флеш-карт. Здесь вы
              найдете уникальные дизайны, созданные с заботой о вашем стиле и
              индивидуальности. Наши кастомные принты — это не просто украшение, это
              способ выразить свою личность и подчеркнуть свой стиль в каждой детали вашей
              жизни.
            </p>

            {expanded && (
              <p className={styles.visible}>
                <br />
                Мы понимаем, что каждый клиент уникален, поэтому у нас вы можете заказать
                кастомный принт на любой предмет: будь то ручка, кружка, или даже
                USB-флешка. Наша команда профессионалов с радостью поможет вам воплотить
                вашу идею в жизнь, создав уникальный дизайн, который будет отражать вашу
                индивидуальность и стиль.
                <br />
                Приобретая кастомные принты у нас, вы можете быть уверены в их качестве и
                долговечности. Мы используем только высококачественные материалы и
                передовые технологии печати, чтобы каждый наш продукт был идеальным
                воплощением вашей уникальной идеи.
                <br />
                Каталог нашего магазина — это не просто место для покупки товаров, это
                место, где вы можете найти вдохновение и уникальные идеи для подарков себе
                и своим близким. Доверьтесь нам, и мы сделаем вашу покупку незабываемой и
                особенной.
              </p>
            )}

            {/* Кнопка разворачивания/сворачивания */}

            <button className={styles.btn} onClick={toggleExpand}>
              {expanded ? "Свернуть" : "Развернуть"}

              {/* Иконка меняющаяся в зависимости от состояния */}
              {icon === "down" ? (
                <svg
                  width="9"
                  height="13"
                  viewBox="0 0 7 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 6.79L5.31 4.97C5.5 4.78 5.82 4.78 6.01 4.97C6.21 5.17 6.21 5.49 6.01 5.68L3.35 8.35C3.15 8.54 2.83 8.54 2.64 8.35L-0.03 5.68C-0.22 5.49 -0.22 5.17 -0.03 4.97C0.17 4.78 0.49 4.78 0.68 4.97L2.5 6.79L2.5 0.33C2.5 0.05 2.72 -0.17 3 -0.17C3.27 -0.17 3.5 0.05 3.5 0.33L3.5 6.79Z"
                    fill="#000000"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                </svg>
              ) : (
                <svg
                  width="9"
                  height="13"
                  viewBox="0 0 9 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.53 4.53C0.23 4.82 -0.24 4.82 -0.54 4.53C-0.83 4.23 -0.83 3.76 -0.54 3.46L3.46 -0.54C3.76 -0.83 4.23 -0.83 4.53 -0.54L8.53 3.46C8.82 3.76 8.82 4.23 8.53 4.53C8.23 4.82 7.76 4.82 7.46 4.53L4.75 1.81L4.75 11.5C4.75 11.91 4.41 12.25 4 12.25C3.58 12.25 3.25 11.91 3.25 11.5L3.25 1.81L0.53 4.53Z"
                    fill="#000000"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className={styles.right}>
            <img src={require("../../../components/images/catalogTop.png")} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogTop;

import React from "react";
import styles from "./QuestionsFooter.module.css";

const QuestionsFooter = () => {
  return (
    <div className="container">
      <div className={styles.quest}>
        <h1>
          Часто задаваемые <span>вопросы</span>
        </h1>
        <ul>
          <li>Вы доставляете по всей России?</li>
          <li>А на бумаге печатаете?</li>
          <li>Можно сделать принт на своей вещи?</li>
          <li>Как быстро сможете произвести заказ?</li>
          <li>Можно заказать одну какую-то позицию?</li>
          <li>Из-за заграницы можно заказать?</li>
          <li>Можно организовать самовывоз?</li>
          <li>А если я не юр лицо, будем сотрудничать?</li>
        </ul>
        <button className={styles.moreQuest}>
          Больше вопросов
          <svg
            width="11.000000"
            height="14.000000"
            viewBox="0 0 11 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs />
            <path
              id="Icon"
              d="M-0.66 4.9C-0.42 2.03 1.98 -0.17 4.85 -0.17L5.14 -0.17C8.01 -0.17 10.41 2.03 10.64 4.9C10.77 6.44 10.3 7.97 9.32 9.16L6.12 13.07C5.54 13.78 4.45 13.78 3.87 13.07L0.67 9.16C-0.31 7.97 -0.78 6.44 -0.66 4.9ZM4.85 0.83C2.5 0.83 0.53 2.63 0.34 4.98C0.23 6.26 0.63 7.54 1.44 8.53L4.64 12.44C4.82 12.66 5.17 12.66 5.35 12.44L8.54 8.53C9.36 7.54 9.75 6.26 9.65 4.98C9.46 2.63 7.49 0.83 5.14 0.83L4.85 0.83ZM3.83 5.38C3.83 4.69 4.36 4.16 5 4.16C5.62 4.16 6.16 4.69 6.16 5.38C6.16 5.91 5.83 6.36 5.38 6.52C4.99 6.67 4.5 7.05 4.5 7.66C4.5 7.94 4.72 8.16 5 8.16C5.27 8.16 5.5 7.94 5.5 7.66C5.5 7.65 5.5 7.63 5.53 7.58C5.58 7.54 5.64 7.49 5.73 7.46C6.57 7.15 7.16 6.33 7.16 5.38C7.16 4.17 6.2 3.16 5 3.16C3.78 3.16 2.83 4.17 2.83 5.38C2.83 5.65 3.05 5.88 3.33 5.88C3.6 5.88 3.83 5.65 3.83 5.38ZM5.66 9.66C5.66 10.03 5.36 10.33 5 10.33C4.62 10.33 4.33 10.03 4.33 9.66C4.33 9.29 4.62 9 5 9C5.36 9 5.66 9.29 5.66 9.66Z"
              fill="#000000"
              fillOpacity="1.000000"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className={styles.helper}>
        <div className={styles.helperText}>
          <h2>
            Нужна <span>помощь</span>?
          </h2>
          <p>
            Оставьте свои данные — мы перезвоним и решим вопрос. Помните, оставляя
            контакты вы даете согласие на обработку персональных данных.
          </p>
        </div>
        <div className={styles.helperForm}>
          <label>
            <p>Имя</p>
            <input type="text" placeholder="Ваше имя" className={styles.bigInp} />
          </label>
          <label>
            <p>Телефон</p>
            <div>
              {" "}
              <input
                type="text"
                placeholder="+7 000 000 00 00"
                className={styles.miniInp}
              />
              <button className={styles.arrowRight}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#000"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </button>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default QuestionsFooter;

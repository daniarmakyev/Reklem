import React from "react";
import styles from "./NotFoundPage.module.css";
import TopText from "../../components/TopText/TopText";
import { Link } from "react-router-dom";
import GreenButton from "../../components/Green-Button/GreenButton";

const NotFoundPage = () => {
  return (
    <div>
      <TopText title={"Ошибка 404"} />
      <div className={`container`}>
        <div className={styles.main}>
          <svg
            width="24.865234"
            height="23.159973"
            viewBox="0 0 24.8652 23.16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs />
            <path
              id="Icon"
              d="M9.59 1.49C10.96 -0.5 13.9 -0.5 15.27 1.49L15.81 2.28C19.19 7.23 22.09 12.49 24.49 17.99L24.6 18.25C25.44 20.18 24.17 22.38 22.07 22.62C15.66 23.33 9.19 23.33 2.79 22.62C0.69 22.38 -0.59 20.18 0.26 18.25L0.37 17.99C2.76 12.49 5.67 7.23 9.05 2.28L9.59 1.49ZM13.72 2.55C13.1 1.64 11.76 1.64 11.14 2.55L10.6 3.34C7.28 8.19 4.43 13.35 2.09 18.74L1.98 18.99C1.64 19.77 2.15 20.66 3 20.75C9.26 21.46 15.59 21.46 21.86 20.75C22.71 20.66 23.22 19.77 22.88 18.99L22.77 18.74C20.42 13.35 17.57 8.19 14.26 3.34L13.72 2.55ZM13.68 7.75C13.68 8.44 13.12 9 12.43 9C11.74 9 11.18 8.44 11.18 7.75C11.18 7.06 11.74 6.5 12.43 6.5C13.12 6.5 13.68 7.06 13.68 7.75ZM12.43 11.19C12.95 11.19 13.37 11.61 13.37 12.13L13.37 18.38C13.37 18.89 12.95 19.31 12.43 19.31C11.91 19.31 11.49 18.89 11.49 18.38L11.49 12.13C11.49 11.61 11.91 11.19 12.43 11.19Z"
              fill="#FFA630"
              fillOpacity="1.000000"
              fillRule="evenodd"
            />
          </svg>

          <h4>Страница не найдена</h4>
          <p>Проверьте правильность адреса</p>
          <Link to={"/"}>
            <GreenButton>На главную</GreenButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

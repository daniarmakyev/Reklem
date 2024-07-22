import { Link } from "react-router-dom";
import GreenButton from "../../../components/Green-Button/GreenButton";
import styles from "./goToDire.module.css";

function GoToDire() {
  return (
    <div className={styles.goToDire}>
      <div className={styles.backgroundContainer}>
        <div className={styles.container}>
          <h1 className={styles.textCenter}>
            Планируете сделать <span>принт?</span> Вы пришли по адресу
          </h1>
          <p className={styles.textCenter}>
            Reklem - только оптовая работа высокого качества с индивидуальным подходом.
            Работаем с 2008 года.
          </p>
          <Link to={"/catalog"}>
            <GreenButton>Перейти в каталог</GreenButton>
          </Link>
        </div>

        <div className={styles.backgroundInner}>
          <a href="#" className={styles.goLinks}>
            <img
              className={`${styles.images} ${styles.coftaOne}`}
              src={require("../../../components/images/cofta.png")}
              alt="Cofta One"
            />
            <img
              className={`${styles.images} ${styles.coftaTwo}`}
              src={require("../../../components/images/coftaTwo.png")}
              alt="Cofta Two"
            />
            <span className={`${styles.label} ${styles.coftaText}`}>Текстиль</span>
          </a>
          <a href="#" className={styles.goLinks}>
            <img
              className={`${styles.images} ${styles.crujkaOne}`}
              src={require("../../../components/images/crujka.png")}
              alt="Crujka One"
            />
            <img
              className={`${styles.images} ${styles.crujkaTwo}`}
              src={require("../../../components/images/crujkaTwo.png")}
              alt="Crujka Two"
            />
            <span className={styles.label}>Кружки и термокружки</span>
          </a>
          <a href="#" className={styles.goLinks}>
            <img
              className={`${styles.images} ${styles.fleshkaOne}`}
              src={require("../../../components/images/fleshka.png")}
              alt="Fleshka One"
            />
            <img
              className={`${styles.images} ${styles.fleshkaTwo}`}
              src={require("../../../components/images/fleshkaTwo.png")}
              alt="Fleshka Two"
            />
            <span className={styles.label}>Флеш-карты</span>
          </a>
          <a href="#" className={styles.goLinks}>
            <img
              className={`${styles.images} ${styles.penOne}`}
              src={require("../../../components/images/pen.png")}
              alt="Pen One"
            />
            <img
              className={`${styles.images} ${styles.penTwo}`}
              src={require("../../../components/images/penTwo.png")}
              alt="Pen Two"
            />
            <span className={styles.label}>Канцелярия</span>
          </a>
          <a href="#" className={styles.goLinks}>
            <img
              className={`${styles.images} ${styles.electroOne}`}
              src={require("../../../components/images/electro.png")}
              alt="Electro One"
            />
            <img
              className={`${styles.images} ${styles.electroTwo}`}
              src={require("../../../components/images/electroTwo.png")}
              alt="Electro Two"
            />
            <span className={styles.label}>Аксессуары</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default GoToDire;

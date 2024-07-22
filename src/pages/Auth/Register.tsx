import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Link, useNavigate } from "react-router-dom";
import styles from "./auth.module.css";
import TopText from "../../components/TopText/TopText";

const Register: FC = () => {
  return (
    <>
      <TopText title={"Регистрация"} />
      <div className={styles.container}>
        <form className={styles.forma}>
          <button className={styles.authBtn}>Регистрация</button>
          <Link to={"/login"}>Уже есть аккаунт?</Link>
        </form>
      </div>
    </>
  );
};

export default Register;

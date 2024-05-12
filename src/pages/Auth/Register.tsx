import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Link, useNavigate } from "react-router-dom";
import { UserType, getUsers, registerUser } from "../../store/actions/mainUsers.action";
import styles from "./auth.module.css"

const Register: FC = () => {
  
    return (
        <>
        <div className={styles.authTop}>
                <div className={styles.authTopInner}>
                <Link to={'/'}>Главная</Link>
            <h2  className={styles.title}>Регистрация</h2>
                </div>
        </div>
    <div className={styles.container}>
      <form className={styles.forma}>
        <button className={styles.authBtn}>Регистрация</button>
        <Link to={'/login'}>Уже есть аккаунт?</Link>
      </form>
      </div>
      </>
    );
  };
  
  export default Register;
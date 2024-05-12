import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/store';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, getUsers } from '../../store/actions/mainUsers.action';
import styles from "./auth.module.css"


const Login: FC = () => {

  
    return (
        <>
        <div className={styles.authTop}>
                <div className={styles.authTopInner}>
                <Link to={'/'}>Главная</Link>
            <h2  className={styles.title}>Логин</h2>
                </div>
        </div>
    <div className={styles.container}>
      <form className={styles.forma}>
        <button className={styles.authBtn}>Логин</button>
      </form>
      </div>
      </>
    );
  };
  
  export default Login;
  

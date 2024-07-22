import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Link, useNavigate } from "react-router-dom";
import styles from "./auth.module.css";
import TopText from "../../components/TopText/TopText";

const Login: FC = () => {
  return (
    <>
      <TopText title={"Логин"} />
      <div className={styles.container}>
        <form className={styles.forma}>
          <button className={styles.authBtn}>Логин</button>
        </form>
      </div>
    </>
  );
};

export default Login;

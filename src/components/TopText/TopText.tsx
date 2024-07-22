import React from "react";
import styles from "./TopText.module.css";
import { Link } from "react-router-dom";

interface TopTextProps {
  title: string;
}

const TopText: React.FC<TopTextProps> = ({ title }) => {
  return (
    <div className={styles.authTop}>
      <div className={styles.authTopInner}>
        <Link to={"/"}>Главная</Link>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  );
};

export default TopText;

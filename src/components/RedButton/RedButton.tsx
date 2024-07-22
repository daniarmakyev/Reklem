import React from "react";
import styles from "./redButton.module.css";
const RedButton = ({ children }) => {
  return <button className={styles.redButton}>{children}</button>;
};

export default RedButton;

import React, { ReactNode } from "react";
import styles from "./categoryCard.module.css";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  children: ReactNode;
  text: string;
  isFifth?: boolean;
}

const CategoryCard = ({ children, text, isFifth }: CategoryCardProps): JSX.Element => {
  return (
    <div className={`${styles.block} ${isFifth ? styles.fifthCard : ""}`}>
      <Link className={styles.card} to={"/"}>
        {children}
      </Link>
      <span className={styles.cardtext}>{text}</span>
    </div>
  );
};

export default CategoryCard;

import React, { ReactNode } from "react";
import styles from "./categoryCard.module.css";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  children: ReactNode;
  text: string;
  isFifth?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  children,
  text,
  isFifth = false,
}) => {
  const blockClass = isFifth ? `${styles.block} ${styles.fifthCard}` : styles.block;

  return (
    <div className={blockClass}>
      <Link className={styles.card} to={"/"} aria-label={text}>
        {children}
      </Link>
      <span className={styles.cardtext}>{text}</span>
    </div>
  );
};

export default CategoryCard;

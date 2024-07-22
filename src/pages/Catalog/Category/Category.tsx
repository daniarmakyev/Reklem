import React from "react";
import styles from "./category.module.css";
import CategoryCard from "../../../components/CategoryCard/CategoryCard";
import { svgs } from "./catgoryCardConsts";

const categories = [
  "Кружки",
  "Термосы",
  "Аксессуары",
  "Канцелярия",
  "Флеш-карты",
  "HDD",
  "SSD",
];

const Category = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Категории</h3>
      <div className={styles.category}>
        {svgs.map((svg, index) => (
          <CategoryCard key={index} text={categories[index]} isFifth={index === 4}>
            {svg}
          </CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;

import { HTMLAttributes } from "react";
import styles from "./Card.module.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  text: string;
  icon: JSX.Element;
  isActive: boolean;
}

const Card = ({ title, isActive, icon: Icon, text, ...props }: CardProps) => {
  return (
    <div
      className={`${styles.card} ${isActive ? styles.active : ""}`}
      {...props}
    >
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.imgWrapper}>{Icon}</div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Card;

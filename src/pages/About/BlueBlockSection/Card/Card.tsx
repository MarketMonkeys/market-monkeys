import { HTMLAttributes } from 'react';
import styles from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  icon: JSX.Element;
  text: string;
  value: string;
}

const Card = ({ title, icon: Icon, text, value, ...props }: CardProps) => {
  return (
    <div className={styles.card} {...props}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          //   alignItems: "center",
        }}
      >
        <h3 className={styles.heading}>{title}</h3>
        <div className={styles.imgWrapper}>{Icon}</div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <p className={styles.text}>{text}</p>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  );
};

export default Card;

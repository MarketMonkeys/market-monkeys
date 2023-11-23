import { HTMLAttributes } from 'react';
import styles from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  icon: JSX.Element;
  content: string;
}

const Card = ({ title, icon: Icon, content, ...props }: CardProps) => {
  return (
    <div className={styles.card} {...props}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
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
        <p className={styles.text}>{content}</p>
      </div>
    </div>
  );
};

export default Card;

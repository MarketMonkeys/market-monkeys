import { HTMLAttributes } from 'react';
import styles from './Card.module.css';

interface CardWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element;
}

const CardWrapper = ({ children, ...props }: CardWrapperProps) => {
  return (
    <div className={styles.cardWrapper} {...props}>
      {children}
    </div>
  );
};

export default CardWrapper;

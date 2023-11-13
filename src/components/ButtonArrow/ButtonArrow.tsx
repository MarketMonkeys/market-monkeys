import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './ButtonArrow.module.css';

interface ButtonArrowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ButtonArrow = ({ children, ...props }: ButtonArrowProps) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default ButtonArrow;

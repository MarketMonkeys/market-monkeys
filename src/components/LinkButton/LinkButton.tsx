import { LinkHTMLAttributes, ReactNode } from 'react';
import styles from './LinkButton.module.css';
import Link from 'next/link';

type ButtonVariant = 'main' | 'secondary' | 'primary';
type ButtonSize = 's' | 'l';

interface IButton extends LinkHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href: string;
}

const BUTTON_VARIANT: { [key in ButtonVariant]: string } = {
  main: styles.mainButton,
  secondary: styles.secondaryButton,
  primary: styles.primaryButton,
};

const BUTTON_SIZE: { [key in ButtonSize]: string } = {
  s: styles.small,
  l: styles.large,
};

const LinkButton = ({
  children,
  variant = 'primary',
  href,
  size = 's',
  ...props
}: IButton) => {
  return (
    <Link
      className={`${styles.button} ${BUTTON_VARIANT[variant]} ${BUTTON_SIZE[size]}`}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkButton;

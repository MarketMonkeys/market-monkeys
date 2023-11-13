'use client';
import ArrowTopIcon from '@/components/Icons/ArrowTopIcon';
import styles from './ScrollButton.module.css';

const ScrollButton = () => {
  const onScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button onClick={onScroll} className={styles.button}>
      <ArrowTopIcon />
    </button>
  );
};

export default ScrollButton;

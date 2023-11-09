'use client';
import React, { useRef } from 'react';
import { useScroll, animated } from '@react-spring/web';
import styles from './BlueBlockSection.module.css';

const BlueSectionWrapper = ({ children }: { children: React.ReactNode }) => {
  const windowHeight = useRef<number>(window.innerHeight);
  const { scrollY } = useScroll();

  return (
    <animated.section
      className={styles.wrapper}
      style={{
        zIndex: 60,
        marginTop: scrollY.to((val) =>
          val < windowHeight.current
            ? -(val + 50)
            : -(windowHeight.current + 50)
        ),
      }}
    >
      {children}
    </animated.section>
  );
};

export default BlueSectionWrapper;

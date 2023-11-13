'use client';
import React, { useEffect, useState } from 'react';
import { useScroll, animated } from '@react-spring/web';
import styles from './BlueBlockSection.module.css';

const BlueSectionWrapper = ({ children }: { children: React.ReactNode }) => {
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  return (
    <animated.section
      className={styles.wrapper}
      style={{
        zIndex: 60,
        marginTop: scrollY.to((val) =>
          val < windowHeight ? -(val + 50) : -(windowHeight + 50)
        ),
      }}
    >
      {children}
    </animated.section>
  );
};

export default BlueSectionWrapper;

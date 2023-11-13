'use client';
import React, { useState, useEffect } from 'react';
import { useScroll, animated } from '@react-spring/web';

const BlueSectionWrapper = ({ children }: { children: React.ReactNode }) => {
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (window) {
      console.log('window');
      setWindowHeight(window.innerHeight);
    }
  }, []);

  return (
    <animated.div
      style={{
        background: 'var(--blue)',
        borderRadius: '50px',
        padding: '120px',
        position: 'relative',
        zIndex: 60,
        marginTop: scrollY.to((val) =>
          val < windowHeight ? -val : -windowHeight
        ),
      }}
    >
      {children}
    </animated.div>
  );
};

export default BlueSectionWrapper;

'use client';
import React, { useRef } from 'react';
import { useScroll, animated } from '@react-spring/web';

const BlueSectionWrapper = ({ children }: { children: React.ReactNode }) => {
  const windowHeight = useRef<number>(window.innerHeight);
  const { scrollY } = useScroll();

  return (
    <animated.div
      //   ref={blueSectionRef}
      style={{
        background: 'var(--blue)',
        borderRadius: '50px',
        padding: '120px',
        position: 'relative',
        zIndex: 60,
        marginTop: scrollY.to((val) =>
          val < windowHeight.current ? -val : -windowHeight.current
        ),
      }}
    >
      {children}
    </animated.div>
  );
};

export default BlueSectionWrapper;

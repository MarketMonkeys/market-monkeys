'use client';
import { useScroll, animated } from '@react-spring/web';
import React, { useEffect, useState } from 'react';

const ParallaxWrapper = ({
  children,
  counter,
}: {
  children: React.ReactNode;
  counter: number;
}) => {
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  return (
    <animated.div
      style={{
        position: 'relative',
        zIndex: 60,
        marginTop: scrollY.to((val) => {
          console.log(val);
          return val < windowHeight / counter
            ? -val * counter
            : -windowHeight * counter;
        }),
      }}
    >
      {children}
    </animated.div>
  );
};

export default ParallaxWrapper;

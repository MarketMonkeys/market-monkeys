'use client';
import styles from './DigitalMarketingSection.module.css';
import { wordGroups } from '@/common/mocks/home';
import { animated, useSpring } from '@react-spring/web';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// const getRandomDelay = () => Math.random() * 1500;

const DigitalMarketingSection = () => {
  const [currentRow, setCurrentRow] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [hover, setHover] = useState(false);

  const springs = useSpring({
    from: { scale: 1, filter: 'brightness(100%)' },
    to: [{ scale: 1.1 }, { scale: 1 }],
    cancel: hover,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const rowIndex = Math.floor(Math.random() * wordGroups.length);
      setCurrentRow(rowIndex);

      const rowLength = wordGroups[rowIndex]?.words
        .split('#')
        .map((word) => word).length;
      setCurrentWord(Math.floor(Math.random() * rowLength));
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ position: 'relative', height: 'calc(100vh - 150px)' }}>
      <ul
        style={{ padding: '20px 0 40px', overflowX: 'hidden' }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {wordGroups.map((group, groupIndex) => (
          <li
            key={groupIndex}
            style={{ textAlign: 'center', whiteSpace: 'nowrap' }}
          >
            {group.words.split('#').map((word, wordIndex) => (
              <animated.div
                className={`${styles.word} ${styles[group.colors[wordIndex]]}`}
                key={wordIndex}
                style={{
                  color: `var(--${group.colors[wordIndex]})`,
                  ...(groupIndex === currentRow &&
                  wordIndex === currentWord &&
                  !hover
                    ? springs
                    : {}),
                }}
              >
                {word}
              </animated.div>
            ))}
          </li>
        ))}
      </ul>
      <Image
        src="/images/laptop-monkey.png"
        alt="test"
        width={700}
        height={420}
        quality={100}
        draggable={false}
        priority={true}
        className={styles.laptopImg}
      />
    </section>
  );
};

export default DigitalMarketingSection;

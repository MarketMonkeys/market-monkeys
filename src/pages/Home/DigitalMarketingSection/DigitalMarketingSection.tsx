'use client';
import styles from './DigitalMarketingSection.module.css';
import { wordGroups } from '@/common/mocks/home';
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';

const getRandomDelay = () => Math.random() * 2000; // Генерує випадкову затримку до 2000 мс

const DigitalMarketingSection = () => {
  const props = useSpring({
    from: { scale: 1 },
    to: [{ scale: 1.1 }, { scale: 1 }],
    loop: true,
    delay: getRandomDelay(),
    config: {
      mass: 2,
      tension: 220,
    },
  });

  return (
    <section style={{ position: 'relative', height: 'calc(100vh - 150px)' }}>
      <ul style={{ padding: '20px 0 40px', overflowX: 'hidden' }}>
        {wordGroups.map((group, groupIndex) => (
          <li
            key={groupIndex}
            style={{ textAlign: 'center', whiteSpace: 'nowrap' }}
          >
            {group.words.split('#').map((word, wordIndex) => (
              // {wordsSprings.map(({ scale }, wordIndex) => (
              <animated.span
                key={wordIndex}
                className={`${styles.word} ${styles[group.colors[wordIndex]]}`}
                // style={props}
                style={{
                  ...props,
                  color: `var(--${group.colors[wordIndex]})`,
                }}
              >
                {word}
              </animated.span>
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

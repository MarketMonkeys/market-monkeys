'use client';
import Form from '@/components/Form/Form';
import Image from 'next/image';
import styles from './FormSection.module.css';
import { useInView, animated } from '@react-spring/web';

const FormSection = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 1000,
        scale: 0.4,
      },
      to: {
        opacity: 1,
        y: 4,
        scale: 1,
      },
    }),
    {
      rootMargin: '-40% 0%',
    }
  );

  return (
    <section id="form" ref={ref} className={styles.wrapper}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex' }}>
          <animated.div style={springs}>
            <Image
              src="/images/digital-marketing-phone_2.svg"
              alt="Digital Marketong Phone"
              draggable={false}
              width={320}
              height={488}
            />
          </animated.div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default FormSection;

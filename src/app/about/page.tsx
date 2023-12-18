import Image from 'next/image';
import styles from './page.module.css';
import BlueBlockSection from '@/pages/About/BlueBlockSection/BlueBlockSection';
// import CarouselSection from '@/pages/About/CarouselSection/CarouselSection';
import ScrollIcon from '@/components/Icons/ScrollIcon';
import AccordionSection from '@/pages/About/AccordionSection/AccordionSection';
import FormSection from '@/components/FormSection/FormSection';

export default function About() {
  return (
    <section>
      <div
        className={styles.shadow}
        style={{ top: 0, opacity: '0.3', rotate: '180deg', height: '120px' }}
      ></div>
      <div
        style={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
          top: '0',
          left: '0',
        }}
      >
        <Image
          src="/images/about-bg.png"
          alt="About bg"
          className={styles.img}
          priority
          fill
          quality={100}
        />
      </div>
      <div className={styles.contentImgWrapper}>
        <div
          style={{
            maxWidth: '1550px',
            width: '100%',
            height: '100%',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* <CarouselSection /> */}
          <div
            style={{
              bottom: '100px',
              left: '120px',
              position: 'absolute',
              zIndex: 4,
            }}
          >
            <p className={styles.heading}>About Us</p>
            <p className={styles.text}>
              Market Monkeys is your dedicated partner
              <br /> in driving online business growth through
              <br /> strategic marketing solutions.
            </p>
          </div>
          <div
            style={{
              bottom: '90px',
              right: '120px',
              position: 'absolute',
              zIndex: 4,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <p style={{ marginRight: '10px' }} className={styles.text}>
              Scroll down for more
            </p>
            <ScrollIcon />
          </div>
        </div>
        <div
          className={styles.shadow}
          style={{
            bottom: 0,
            opacity: '0.8',
            height: '240px',
          }}
        ></div>
      </div>
      <BlueBlockSection />
      <AccordionSection />
      <FormSection />
    </section>
  );
}

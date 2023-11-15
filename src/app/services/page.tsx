import Image from 'next/image';
import styles from './page.module.css';
import ScrollIcon from '@/components/Icons/ScrollIcon';
import MarketingSolutionsSection from '@/pages/Services/MarketingSolutionsSection/MarketingSolutionsSection';
import WorkflowStagesSection from '@/pages/Services/WorkflowStagesSection/WorkflowStagesSection';

export default function Services() {
  return (
    <section>
      <div className={styles.shadow} style={{ top: 0, opacity: 0.2 }}></div>
      <div
        style={{
          width: '100%',
          height: '770px',
          position: 'absolute',
          top: '0',
          left: '0',
        }}
      >
        <Image
          src="/images/services-bg-1440.png"
          alt="Projects bg"
          className={styles.imgSmall}
          priority={true}
          fill={true}
        />
        <Image
          src="/images/services-bg-1920.png"
          alt="Projects bg"
          className={styles.imgLarge}
          priority={true}
          fill={true}
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
          <div
            style={{
              bottom: '40px',
              left: '150px',
              position: 'absolute',
              zIndex: 3,
            }}
          >
            <p className={styles.heading}>Our Services</p>
            <p className={styles.text}>
              Discover our comprehensive range of services
              <br /> designed to elevate your online presence and
              <br /> drive business success.
            </p>
          </div>
          <div
            style={{
              bottom: '40px',
              right: '150px',
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              zIndex: 3,
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
            opacity: 0.4,
            rotate: '180deg',
          }}
        ></div>
      </div>
      <MarketingSolutionsSection />
      <WorkflowStagesSection />
    </section>
  );
}

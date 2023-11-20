import Image from 'next/image';
import styles from './page.module.css';
import ScrollIcon from '@/components/Icons/ScrollIcon';
import ProjectsSection from '@/pages/Projects/ProjectsSection/ProjectsSection';
import ReviewsSection from '@/pages/Projects/ReviewsSection/ReviewsSection';

export default function Project() {
  return (
    <section>
      <div className={styles.background}>
        <Image
          src="/images/case-bg.png"
          alt="Case bg"
          className={styles.img}
          priority={true}
          width={734}
          height={560}
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
              left: '120px',
              position: 'absolute',
              zIndex: 2,
            }}
          >
            <p className={styles.text}>Le SynDicat Bar</p>
          </div>
          <div
            style={{
              bottom: '40px',
              right: '120px',
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              zIndex: 2,
            }}
          >
            <p style={{ marginRight: '10px' }} className={styles.text}>
              Scroll down for more
            </p>
            <ScrollIcon />
          </div>
        </div>
        <div className={styles.shadow}></div>
      </div>
      <ProjectsSection />
      <ReviewsSection />
    </section>
  );
}

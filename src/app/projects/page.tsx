import Image from 'next/image';
import styles from './page.module.css';
import ScrollIcon from '@/components/Icons/ScrollIcon';

export default function Projects() {
  return (
    <section>
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
          src="/images/projects-bg-1200.png"
          alt="Projects bg"
          className={styles.imgSmall}
          priority={true}
          fill={true}
        />
        <Image
          src="/images/about-bg-1920.png"
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
          <div style={{ bottom: '100px', left: '150px', position: 'absolute' }}>
            <p className={styles.heading}>Our Projects</p>
            <p className={styles.text}>
              Explore our portfolio of successful projects,
              <br /> where we&apos;ve helped businesses like yours
              <br /> thrive in the digital landscape.
            </p>
          </div>
          <div
            style={{
              bottom: '90px',
              right: '150px',
              position: 'absolute',
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
      </div>
    </section>
  );
}

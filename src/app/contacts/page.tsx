import Image from 'next/image';
import styles from './page.module.css';
import ScrollIcon from '@/components/Icons/ScrollIcon';
import GetInTouchSection from '@/pages/Contacts/GetInTouchSection/GetInTouchSection';
import FormSection from '@/components/FormSection/FormSection';
import { redirect } from 'next/navigation';

export default function Contacts() {
  redirect('/');
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
          src="/images/contacts-bg.png"
          alt="Contacts bg"
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
          <div
            style={{
              bottom: '40px',
              left: '150px',
              position: 'absolute',
              zIndex: 3,
            }}
          >
            <p className={styles.heading}>Our Contacts</p>
            <p className={styles.text}>
              Reach out to us anytime - we&apos;re just a click
              <br /> or call away to answer your questions
              <br /> and discuss your needs.
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
        <div className={styles.shadow}></div>
      </div>
      <GetInTouchSection />
      <FormSection />
    </section>
  );
}

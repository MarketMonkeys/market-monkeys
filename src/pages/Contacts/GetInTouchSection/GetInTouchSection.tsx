'use client';

import { CONTACT_INFO } from '@/common/mocks/contacts';
import styles from './GetInTouchSection.module.css';
import Link from 'next/link';
import ArrowSquareIcon from '@/components/Icons/ArrowSquareIcon';

const GetInTouchSection = () => {
  const { email, phones, socialMedia } = CONTACT_INFO;
  const copy = (textToCopy: string) =>
    navigator.clipboard.writeText(textToCopy);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>get in touch</h2>
      <div className={styles.rowWrapper}>
        <span className={styles.contactTitle}>E-Mail</span>
        <span
          className={styles.contactValue}
          title="Click to copy email to clipboard"
          onClick={() => copy(email)}
        >
          {email}
        </span>
      </div>
      <div className={styles.rowWrapper} style={{ paddingTop: '40px' }}>
        <span className={styles.contactTitle} style={{ paddingTop: '34px' }}>
          Phones
        </span>
        <div>
          {phones.map(({ country, value }, index) => (
            <div className={styles.rowWrapper} key={`phone${country}${index}`}>
              <span
                className={styles.contactValue}
                title="Click to copy phone to clipboard"
                onClick={() => copy(value)}
              >
                {value}
              </span>
              <span className={styles.rowWrapper} style={{ opacity: 0.6 }}>
                {country}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.rowWrapper} style={{ paddingTop: '40px' }}>
        <span className={styles.contactTitle} style={{ paddingTop: '34px' }}>
          Social Media
        </span>
        <div>
          {socialMedia.map(({ name, link }, index) => (
            <div className={styles.rowWrapper} key={`media${name}${index}`}>
              <span
                className={styles.contactValue}
                title={`Click to copy ${name} link to clipboard`}
                onClick={() => copy(link)}
              >
                {name}
              </span>
              <Link href={link} target="_blank">
                <ArrowSquareIcon />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;

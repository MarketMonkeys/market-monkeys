import styles from './Card.module.css';
import LinkButton from '@/components/LinkButton/LinkButton';
import Image from 'next/image';
import macbookCase from 'public/images/macbook-case.svg';

interface CardProps {
  title: string;
  subTitle: string;
  text: string;
  src: string;
}

const Card = ({ title, subTitle, text, src }: CardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBlock}>
        <h4 className={styles.title}>{title}</h4>
        <div>
          <h5 className={styles.subTitle}>{subTitle}</h5>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <Image src={macbookCase} alt="Macbook case" />
        <Image
          className={styles.image}
          src={src}
          alt="Macbook screen image"
          width={471}
          height={307}
        />
      </div>
      <div className={styles.platformBlock}>
        <span className={styles.platform}>Desktop</span>

        <LinkButton variant="secondary" href="/">
          Explore
        </LinkButton>
      </div>
    </div>
  );
};

export default Card;

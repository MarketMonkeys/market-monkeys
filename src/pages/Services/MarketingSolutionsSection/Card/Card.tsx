import styles from './Card.module.css';
import Image from 'next/image';

interface CardProps {
  title: string;
  text: string;
  tags: string[];
  tagColor: string;
  src: string;
}

const Card = ({ title, text, tags, tagColor, src }: CardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardWrapper}>
        <h4 className={styles.heading}>{title}</h4>
        <div style={{ marginTop: '20px', marginBottom: '30px' }}>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.tagsWrapper}>
          {tags.map((tag, index) => (
            <div
              className={styles.tag}
              style={{ backgroundColor: `var(--${tagColor})` }}
              key={tag + index}
            >
              <span className={styles.text}>{tag}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          draggable={false}
          src={src}
          fill
          style={{ objectFit: 'contain' }}
          alt={`${title} image`}
          quality={100}
        />
      </div>
    </div>
  );
};

export default Card;

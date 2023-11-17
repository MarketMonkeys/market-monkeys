import Image from 'next/image';
import styles from './Carousel.module.css';
import StarIcon from '@/components/Icons/StarIcon';

interface SlideProps {
  src: string;
  fullName: string;
  review: string;
  project: string;
  rating: number;
  isActive: boolean;
}

const Slide = ({
  src,
  fullName,
  review,
  project,
  rating,
  isActive,
}: SlideProps) => {
  return (
    <div className={styles.slideWrapper}>
      <Image
        src={src}
        alt={project}
        width={572}
        height={360}
        draggable="false"
        className={styles.slideImage}
      />
      <div className={styles.slideCard}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h4 className={styles.slideHeading}>{fullName}</h4>
          <div style={{ display: 'flex', gap: '4px' }}>
            {Array.from({ length: 5 }, (_, index) => (
              <StarIcon isFilled={index < rating} key={`star${index}`} />
            ))}
          </div>
        </div>
        <span className={styles.slideQuote}>“</span>
        <span className={styles.slideText}>{review}</span>
        <div className={styles.slideFooterText}>
          <span style={{ opacity: 0.6 }}>Project</span>
          <span>{project}</span>
        </div>
      </div>
      {isActive && <div className={styles.slideActive}></div>}
    </div>
  );
};

export default Slide;

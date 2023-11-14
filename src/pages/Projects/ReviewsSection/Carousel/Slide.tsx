import Image from 'next/image';
import styles from './Carousel.module.css';

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
              <svg
                key={`star${index}`}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M18.6947 8.59371L14.8016 12.3887L15.721 17.7487C15.761 17.9831 15.6647 18.22 15.4722 18.36C15.3635 18.4393 15.2341 18.4793 15.1047 18.4793C15.0053 18.4793 14.9053 18.4556 14.8141 18.4075L10.0003 15.8768L5.18722 18.4068C4.97722 18.5181 4.72159 18.5 4.52909 18.3593C4.33659 18.2193 4.24034 17.9825 4.28034 17.7481L5.19972 12.3881L1.30597 8.59371C1.13597 8.42746 1.07409 8.17871 1.14784 7.95309C1.22159 7.72746 1.41722 7.56184 1.65284 7.52746L7.03347 6.74621L9.43972 1.86996C9.65034 1.44309 10.3503 1.44309 10.561 1.86996L12.9672 6.74621L18.3478 7.52746C18.5835 7.56184 18.7791 7.72684 18.8528 7.95309C18.9266 8.17934 18.8647 8.42684 18.6947 8.59371Z"
                  fill={index < rating ? 'var(--green)' : 'var(--white)'}
                  stroke={index < rating ? 'var(--green)' : 'var(--black)'}
                />
              </svg>
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

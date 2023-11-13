import Image from 'next/image';
import styles from './Carousel.module.css';

interface SlideProps {
  src: string;
  fullName: string;
  position: string;
}

const Slide = ({ src, fullName, position }: SlideProps) => {
  return (
    <div>
      <Image
        src={src}
        alt={fullName}
        width={384}
        height={384}
        draggable="false"
        style={{ borderRadius: '10px', marginBottom: '10px' }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <h4 className={styles.slideHeading}>{fullName}</h4>
        <span className={styles.slideText}>{position}</span>
      </div>
    </div>
  );
};

export default Slide;

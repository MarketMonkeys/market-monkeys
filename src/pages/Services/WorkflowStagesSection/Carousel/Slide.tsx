import styles from './Carousel.module.css';

interface SlideProps {
  icon: JSX.Element;
  title: string;
  text: string;
}

const Slide = ({ icon: Icon, text, title }: SlideProps) => {
  return (
    <div className={styles.slideWrapper}>
      <div
        style={{
          display: 'flex',
          gap: '46px',
        }}
      >
        <h4 className={styles.slideHeading}>{title}</h4>
        <div className={styles.imgWrapper}>{Icon}</div>
      </div>

      <span className={styles.slideText}>{text}</span>
    </div>
  );
};

export default Slide;

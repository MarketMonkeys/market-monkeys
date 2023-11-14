import Carousel from './Carousel/Carousel';
import styles from './ReviewsSection.module.css';
import FormSection from '@/components/FormSection/FormSection';

const ReviewsSection = () => {
  return (
    <section className={styles.wrapper}>
      <Carousel />
      <FormSection />
    </section>
  );
};

export default ReviewsSection;

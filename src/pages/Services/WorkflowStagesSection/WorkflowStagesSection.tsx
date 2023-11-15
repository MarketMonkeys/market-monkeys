import Carousel from './Carousel/Carousel';
import styles from './WorkflowStagesSection.module.css';
import FormSection from '@/components/FormSection/FormSection';

const WorkflowStagesSection = () => {
  return (
    <section className={styles.wrapper}>
      <Carousel />
      <FormSection />
    </section>
  );
};

export default WorkflowStagesSection;

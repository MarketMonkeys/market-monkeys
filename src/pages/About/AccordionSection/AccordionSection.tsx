import Accordion from './Accordion/Accordion';
import styles from './AccordionSection.module.css';

const AccordionSection = () => {
  return (
    <section>
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          padding: '150px 0',
        }}
      >
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
        <Accordion />
      </div>
    </section>
  );
};

export default AccordionSection;

import styles from './MarketingSolutionsSection.module.css';
import { MARKETING_SOLUTIONS } from '@/common/mocks/services';
import Card from './Card/Card';

const MarketingSolutionsSection = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Marketing Solutions Hub</h2>
      <div className={styles.cardsWrapper}>
        {MARKETING_SOLUTIONS.map((solution, index) => (
          <Card {...solution} key={solution.title + index} />
        ))}
      </div>
    </section>
  );
};

export default MarketingSolutionsSection;

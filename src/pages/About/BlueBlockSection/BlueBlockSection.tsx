import { statisticalTerms } from '@/common/mocks/about';
import styles from './BlueBlockSection.module.css';
import Card from './Card/Card';
const BlueBlockSection = () => {
  return (
    <section className={styles.wrapper}>
      <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
        <p className={styles.bigText}>
          Our vision is to shape the future of digital marketing through
          visionary strategies that empower businesses to excel in the online
          landscape.
        </p>
        <div className={styles.line} />
        {/* Change position in the future */}
        <div style={{ display: 'flex', gap: '24px', marginBottom: '120px' }}>
          <div style={{ maxWidth: '384px' }}>
            <p className={styles.smallCardTitle}>What Do We Do</p>
            <p className={styles.smallCardText}>
              Creating strategies, keyword writing, unique description, organic
              traffic, attracting customers to a specific product or service,
              unique description, organic traffic, attracting customers to a
              specific product or service.
            </p>
          </div>
          <div style={{ maxWidth: '384px' }}>
            <p className={styles.smallCardTitle}>Our Mission</p>
            <p className={styles.smallCardText}>
              Creating strategies, keyword writing, unique description, organic
              traffic, attracting customers to a specific product or service.
            </p>
          </div>
        </div>
        <h2 className={styles.heading}>In Statistical Terms</h2>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          {statisticalTerms.map((item, index) => (
            <li
              key={item.title + item.value}
              style={{ width: index === 0 || index === 3 ? '792px' : '384px' }}
            >
              <Card {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlueBlockSection;

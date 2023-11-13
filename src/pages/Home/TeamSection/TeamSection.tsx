import Image from 'next/image';
import Carousel from './Carousel/Carousel';
import styles from './TeamSection.module.css';
import Form from '@/components/Form/Form';

const TeamSection = () => {
  return (
    <section className={styles.wrapper}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Carousel />
        <div id="form" style={{ display: 'flex' }}>
          <Image
            src="/images/digital-marketing-phone.svg"
            alt="Digital Marketong Phone"
            draggable={false}
            width={320}
            height={488}
          />
          <Form />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

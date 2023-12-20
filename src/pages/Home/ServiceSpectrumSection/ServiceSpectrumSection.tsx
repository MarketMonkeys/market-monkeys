'use client';
import { serviceSpectrum, serviceSpectrumImages } from '@/common/mocks/home';
import styles from './ServiceSpectrumSection.module.css';
import Card from './Card/Card';
import Image from 'next/image';
import { useState } from 'react';
import LinkButton from '@/components/LinkButton/LinkButton';
// import { useDebounce } from '@/hooks/useDebounce';
import CardWrapper from './Card/CardWrapper';

const ServiceSpectrumSection = () => {
  const [activeCard, setActiveCard] = useState(serviceSpectrum[0].title);
  // const debouncedValue = useDebounce<string>(activeCard, 250);

  const onMouseEnter = (title: string) => {
    setActiveCard(title);
  };

  const onMouseLeave = () => {
    setActiveCard(serviceSpectrum[0].title);
  };

  return (
    <section style={{ marginBottom: '150px' }}>
      <h2 className={styles.heading}>Service Spectrum</h2>
      <div className={styles.serviceBlock}>
        <Image
          src={serviceSpectrumImages[activeCard]}
          // src={serviceSpectrumImages[debouncedValue]}
          alt="SEO image"
          width={384}
          height={792}
          style={{ marginRight: '24px' }}
        />
        <div className={styles.cards}>
          {serviceSpectrum.map(({ text, title, icon }) => (
            <CardWrapper
              key={title}
              onMouseEnter={() => onMouseEnter(title)}
              onMouseLeave={onMouseLeave}
            >
              <Card
                key={title}
                text={text}
                title={title}
                icon={icon}
                isActive={activeCard === title}
                // isActive={debouncedValue === title}
                // onMouseEnter={() => onMouseEnter(title)}
                // onMouseLeave={onMouseLeave}
              />
            </CardWrapper>
          ))}
        </div>
      </div>
      <LinkButton href="/services" size="l" style={{ margin: '0 auto' }}>
        VIEW ALL SERVICES
      </LinkButton>
    </section>
  );
};

export default ServiceSpectrumSection;

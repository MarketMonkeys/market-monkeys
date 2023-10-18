"use client";
import { serviceSpectrum, serviceSpectrumImages } from "@/common/mocks/home";
import styles from "./ServiceSpectrumSection.module.css";
import Card from "./Card/Card";
import Image from "next/image";
import { useState } from "react";
import LinkButton from "@/components/LinkButton/LinkButton";
import { useDebounce } from "@/hooks/useDebounce";

const ServiceSpectrumSection = () => {
  const [activeCard, setActiveCard] = useState(serviceSpectrum[0].title);
  const debouncedValue = useDebounce<string>(activeCard, 250);

  const onMouseEnter = (title: string) => {
    setActiveCard(title);
  };

  const onMouseLeave = () => {
    setActiveCard(serviceSpectrum[0].title);
  };

  return (
    <section style={{ marginBottom: "120px" }}>
      <h2 className={styles.heading}>Service Spectrum</h2>
      <div className={styles.serviceBlock}>
        <Image
          src={serviceSpectrumImages[debouncedValue]}
          alt="SEO image"
          width={384}
          height={792}
          style={{ marginRight: "24px" }}
        />
        <div className={styles.cards}>
          {serviceSpectrum.map(({ text, title, icon }) => (
            <Card
              key={title}
              text={text}
              title={title}
              icon={icon}
              isActive={debouncedValue === title}
              onMouseEnter={() => onMouseEnter(title)}
              onMouseLeave={onMouseLeave}
            />
          ))}
        </div>
      </div>
      <LinkButton href="/" size="l" style={{ margin: "0 auto" }}>
        VIEW ALL SERVICES
      </LinkButton>
    </section>
  );
};

export default ServiceSpectrumSection;

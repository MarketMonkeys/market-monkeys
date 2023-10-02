"use client";
import { serviceSpectrum, serviceSpectrumImages } from "@/common/mocks/home";
import styles from "./ServiceSpectrumSection.module.css";
import Card from "./Card/Card";
import Image from "next/image";
import { useState } from "react";
import LinkButton from "@/components/LinkButton/LinkButton";

const ServiceSpectrumSection = () => {
  const [activeCard, setActiveCard] = useState(serviceSpectrum[0].title);

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            src={serviceSpectrumImages[activeCard]}
            alt="SEO image"
            width={384}
            height={384}
            style={{ marginRight: "24px" }}
          />
          <LinkButton
            href="/changeMe"
            size="l"
            style={{ marginBottom: "24px" }}
          >
            VIEW ALL SERVICES
          </LinkButton>
        </div>
        <div className={styles.cards}>
          {serviceSpectrum.map(({ text, title, icon }) => (
            <Card
              key={title}
              text={text}
              title={title}
              icon={icon}
              isActive={activeCard === title}
              onMouseEnter={() => onMouseEnter(title)}
              onMouseLeave={onMouseLeave}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSpectrumSection;

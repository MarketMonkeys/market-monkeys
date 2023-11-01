import Image from "next/image";
import styles from "./page.module.css";
import BlueBlockSection from "@/pages/About/BlueBlockSection/BlueBlockSection";
import CarouselSection from "@/pages/About/CarouselSection/CarouselSection";
import ScrollIcon from "@/components/Icons/ScrollIcon";
import AccordionSection from "@/pages/About/AccordionSection/AccordionSection";
import FormSection from "@/components/FormSection/FormSection";

export default function About() {
  return (
    <section>
      <div
        style={{
          width: "100%",
          height: "100vh",
          // height: "770px",
          position: "absolute",
          top: "0",
          left: "0"
        }}
      >
        <Image
          src="/images/about-bg-1200.png"
          alt="About bg"
          className={styles.imgSmall}
          priority={true}
          fill={true}
        />
        <Image
          src="/images/about-bg-1920.png"
          alt="About bg"
          className={styles.imgLarge}
          priority={true}
          fill={true}
        />
      </div>
      <div className={styles.contentImgWrapper}>
        <div
          style={{
            maxWidth: "1550px",
            width: "100%",
            height: "100%",
            margin: "0 auto",
            position: "relative"
          }}
        >
          <CarouselSection />
          <div style={{ bottom: "100px", left: "150px", position: "absolute" }}>
            <p className={styles.heading}>About Us</p>
            <p className={styles.text}>
              Market Monkeys is your dedicated partner
              <br /> in driving online business growth through
              <br /> strategic marketing solutions.
            </p>
          </div>
          <div
            style={{
              bottom: "90px",
              right: "150px",
              position: "absolute",
              display: "flex",
              alignItems: "center"
            }}
          >
            <p style={{ marginRight: "10px" }} className={styles.text}>
              Scroll down for more
            </p>
            <ScrollIcon />
          </div>
        </div>
      </div>
      <BlueBlockSection />
      <AccordionSection />
      <FormSection />
    </section>
  );
}

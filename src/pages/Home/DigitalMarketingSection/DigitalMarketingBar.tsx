import LinkButton from "@/components/LinkButton/LinkButton";
import styles from "./DigitalMarketingSection.module.css";
import Image from "next/image";

const DigitalMarketingBar = () => {
  return (
    <div className={styles.barContainer}>
      <div className={styles.barWrapper}>
        <h3 className={styles.barHeading}>Digital Marketing</h3>
        <Image
          src="/images/laptop-monkey.svg"
          alt="test"
          width={700}
          height={420}
          quality={100}
          draggable={false}
          priority={true}
          className={styles.laptopImg}
        />
        <LinkButton href="/changeMe" size="l">
          VIER OUR PROJECTS
        </LinkButton>
      </div>
    </div>
  );
};

export default DigitalMarketingBar;

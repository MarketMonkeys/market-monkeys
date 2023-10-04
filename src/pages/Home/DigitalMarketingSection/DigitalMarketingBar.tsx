import LinkButton from "@/components/LinkButton/LinkButton";
import styles from "./DigitalMarketingSection.module.css";
import Image from "next/image";

const DigitalMarketingBar = () => {
  return (
    <div className={styles.barContainer}>
      <div className={styles.barWrapper}>
        <p className={styles.barHeading}>Digital Marketing</p>
        <Image
          src="/images/laptop-monkey.png"
          alt="test"
          width={700}
          height={420}
          quality={100}
          draggable={false}
          priority={true}
          className={styles.laptopImg}
        />
        <LinkButton href="/" size="l">
          VIER OUR PROJECTS
        </LinkButton>
      </div>
    </div>
  );
};

export default DigitalMarketingBar;

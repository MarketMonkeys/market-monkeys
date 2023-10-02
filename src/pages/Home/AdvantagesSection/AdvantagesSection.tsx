import WebIcon from "@/components/Icons/WebIcon";
import styles from "./AdvantagesSection.module.css";
import Card from "./Card/Card";
import SeoIcon from "@/components/Icons/SeoIcon";
import phoneImg from "/public/images/phone.png";
import Image from "next/image";
import BrandIcon from "@/components/Icons/BrandIcon";
import AuditIcon from "@/components/Icons/AuditIcon";

const AdvatagesSection = () => {
  return (
    <section>
      <h2 className={styles.heading}>Competitive Advantages</h2>
      <div className={styles.wrapper}>
        <div className={styles.cardsWrapper}>
          <Card
            icon={<SeoIcon />}
            marginBottom="60px"
            title="First Advantage"
            text="Creating strategies, keyword writing, unique description, organic traffic, attracting customers to a specific product or service."
          />
          <Card
            icon={<WebIcon />}
            title="Second Advantage"
            text="Creating strategies, keyword writing, unique description, organic traffic, attracting customers to a specific product or service."
          />
        </div>
        <Image
          src={phoneImg}
          alt="Phone"
          className={styles.phoneImg}
          draggable={false}
          quality={100}
        />
        <div className={styles.cardsWrapper}>
          <Card
            icon={<BrandIcon />}
            isReverseOrder
            marginBottom="60px"
            title="Third Advantage"
            text="Creating strategies, keyword writing, unique description, organic traffic, attracting customers to a specific product or service."
          />
          <Card
            icon={<AuditIcon />}
            isReverseOrder
            title="Fourth Advantage"
            text="Creating strategies, keyword writing, unique description, organic traffic, attracting customers to a specific product or service."
          />
        </div>
      </div>
    </section>
  );
};

export default AdvatagesSection;

import DoneIcon from "@/components/Icons/DoneIcon";
import styles from "./OldCard.module.css";
import LinkButton from "@/components/LinkButton/LinkButton";
import Image from "next/image";

interface OldCardProps {
  title: string;
  index: number;
  subtitle: string;
  text: string;
  src: string;
  label?: string;
}

const OldCard = ({
  title,
  index,
  subtitle,
  text,
  label,
  src
}: OldCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.cardWrapper}
        style={
          index % 2 === 0
            ? {
                paddingLeft: "22px",
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0px"
              }
            : {
                paddingRight: "22px",
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0px"
              }
        }
      >
        <div className={styles.headingWrapper}>
          <h4 className={styles.heading}>{title}</h4>
          <span className={styles.index}>0{index}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className={styles.descriptionBlock}>
            <div className={styles.imgWrapper}>
              <DoneIcon />
            </div>
            <h5 className={styles.subtitle}>{subtitle}</h5>
            <p className={styles.text}>{text}</p>
            {label && <span className={styles.label}>{label}</span>}
          </div>
          <LinkButton
            variant="secondary"
            href="/"
            style={{ alignSelf: "flex-end", height: "fit-content" }}
          >
            Explore
          </LinkButton>
        </div>
      </div>
      <div
        className={styles.imageWrapper}
        style={
          index % 2 === 0
            ? { paddingRight: "22px", textAlign: "left" }
            : { paddingLeft: "22px", textAlign: "right" }
        }
      >
        <Image
          draggable={false}
          src={src}
          width={522}
          height={300}
          alt={`${title} image`}
          className={styles.image}
          quality={100}
        />
      </div>
    </div>
  );
};

export default OldCard;

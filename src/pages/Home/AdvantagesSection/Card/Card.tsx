import styles from "./Card.module.css";

interface CardProps {
  title: string;
  text: string;
  icon: JSX.Element;
  isReverseOrder?: boolean;
  marginBottom?: string;
}

const Card = ({
  title,
  icon: Icon,
  text,
  isReverseOrder = false,
  marginBottom = "0px",
}: CardProps) => {
  return (
    <div
      className={styles.card}
      style={{
        textAlign: isReverseOrder ? "right" : "left",
        marginBottom: marginBottom,
      }}
    >
      <div
        className={styles.imgWrapper}
        style={{
          order: isReverseOrder ? "2" : "1",
          margin: isReverseOrder ? "0 0 0 20px" : "0 20px 0 0",
        }}
      >
        {Icon}
      </div>
      <div style={{ order: isReverseOrder ? "1" : "2" }}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Card;

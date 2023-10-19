import styles from "./DigitalMarketingSection.module.css";
import { wordGroups } from "@/common/mocks/home";
import Image from "next/image";

const DigitalMarketingSection = () => {
  return (
    <section style={{ position: "relative" }}>
      <ul style={{ padding: "20px 0 40px" }}>
        {wordGroups.map((group, groupIndex) => (
          <li
            key={groupIndex}
            style={{ textAlign: "center", whiteSpace: "nowrap" }}
          >
            {group.words.split("#").map((word, wordIndex) => (
              <span
                key={wordIndex}
                className={`${styles.word} ${styles[group.colors[wordIndex]]}`}
                style={{ color: `var(--${group.colors[wordIndex]})` }}
              >
                {word}
              </span>
            ))}
          </li>
        ))}
      </ul>
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
    </section>
  );
};

export default DigitalMarketingSection;

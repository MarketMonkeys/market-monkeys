import styles from "./DigitalMarketingSection.module.css";
import DigitalMarketingBar from "./DigitalMarketingBar";
import { wordGroups } from "@/common/mocks/home";

const DigitalMarketingSection = () => {
  return (
    <section>
      <ul style={{ padding: "20px 0" }}>
        {wordGroups.map((group, groupIndex) => (
          <li key={groupIndex} style={{ textAlign: "center" }}>
            {group.words.split("#").map((word, wordIndex) => (
              <span
                key={wordIndex}
                className={styles.word}
                style={{ color: `var(--${group.colors[wordIndex]})` }}
              >
                {word}
              </span>
            ))}
          </li>
        ))}
      </ul>
      <DigitalMarketingBar />
    </section>
  );
};

export default DigitalMarketingSection;

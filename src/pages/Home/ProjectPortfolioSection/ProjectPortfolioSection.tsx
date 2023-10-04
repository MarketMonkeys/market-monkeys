import { projectPortfolioSection } from "@/common/mocks/home";
import Card from "./Card/Card";
import styles from "./ProjectPortfolioSection.module.css";
import LinkButton from "@/components/LinkButton/LinkButton";

const ProjectPortfolioSection = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Project Portfolio</h2>
      <div>
        {projectPortfolioSection.map(
          ({ title, subtitle, label, text, src }, index) => {
            const cardIndex = index + 1;
            const isReversed = cardIndex % 2 === 0;

            return (
              <Card
                key={src + cardIndex}
                title={title}
                index={cardIndex}
                subtitle={subtitle}
                text={text}
                label={label}
                src={src}
                isReversed={isReversed}
              />
            );
          }
        )}
      </div>
      <div
        style={{ marginTop: "60px", display: "flex", justifyContent: "center" }}
      >
        <LinkButton size="l" href="/">
          VIEW ALL PROJECTS
        </LinkButton>
      </div>
    </section>
  );
};

export default ProjectPortfolioSection;

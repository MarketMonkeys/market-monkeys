import { projectPortfolioSection } from "@/common/mocks/home";
import styles from "./ProjectPortfolioSection.module.css";
import OldCard from "./OldCard/OldCard";

const ProjectPortfolioSection = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Project Portfolio</h2>
      <div className={styles.cardsWrapper}>
        {projectPortfolioSection.map(
          ({ title, subtitle, label, text, src, srcHover }, index) => {
            const cardIndex = index + 1;
            return (
              <OldCard
                key={src + cardIndex}
                title={title}
                index={cardIndex}
                subtitle={subtitle}
                text={text}
                label={label}
                src={src}
                srcHover={srcHover}
              />
            );
          }
        )}

        {/* <Card
          title={"NFT Marketplace / Web3.0 Design"}
          subTitle={"Our Plan of Action"}
          text={
            "Web Design | Web Development | SEO Strategy | Content Marketing"
          }
          src={"/images/nft-marketplace.png"}
        /> */}
      </div>
    </section>
  );
};

export default ProjectPortfolioSection;

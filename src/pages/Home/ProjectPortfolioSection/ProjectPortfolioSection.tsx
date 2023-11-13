// import { projectPortfolioSection } from "@/common/mocks/home";
import Card from './Card/Card';
import styles from './ProjectPortfolioSection.module.css';

const ProjectPortfolioSection = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Project Portfolio</h2>
      <div>
        {/* {projectPortfolioSection.map(
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
        )} */}

        <Card
          title={'NFT Marketplace / Web3.0 Design'}
          subTitle={'Our Plan of Action'}
          text={
            'Web Design | Web Development | SEO Strategy | Content Marketing'
          }
          src={'/images/nft-marketplace.png'}
        />
      </div>
    </section>
  );
};

export default ProjectPortfolioSection;

import { projectPortfolioSection } from '@/common/mocks/home';
import styles from './ProjectPortfolioSection.module.css';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import LinkButton from '@/components/LinkButton/LinkButton';

const ProjectPortfolioSection = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Project Portfolio</h2>
      <div className={styles.cardsWrapper}>
        {projectPortfolioSection.map(
          ({ title, subtitle, label, text, src, srcHover }, index) => {
            const cardIndex = index + 1;
            return (
              <ProjectCard
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
            'Web Design | Web Development | SEO Strategy | Content Marketing'
          }
          src={"/images/nft-marketplace.png"}
        /> */}
      </div>
      <LinkButton href="/projects" size="l" style={{ margin: '0 auto' }}>
        VIEW ALL PROJECTS
      </LinkButton>
    </section>
  );
};

export default ProjectPortfolioSection;

import { filters, projectsSection } from '@/common/mocks/projects';
import styles from './ProjectsSection.module.css';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

const ProjectsSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.filterPanel}>
        {filters.map((filter, index) => (
          <button
            className={`${styles.filter} ${
              filter === 'All' && styles.activeFilter
            }`}
            key={`${filter}${index}`}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className={styles.border}></div>
      <div className={styles.cardsWrapper}>
        {projectsSection.map(
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
      </div>
      {/* <LinkButton href="/projects" size="l" style={{ margin: '0 auto' }}>
        LOAD MORE PROJECTS
      </LinkButton> */}
      <button className={styles.button}>load more projects</button>
    </section>
  );
};

export default ProjectsSection;

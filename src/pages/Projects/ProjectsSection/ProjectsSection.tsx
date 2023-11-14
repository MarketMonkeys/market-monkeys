'use client';
import { useState } from 'react';
import { filters, projectsSection } from '@/common/mocks/projects';
import styles from './ProjectsSection.module.css';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

const INITIAL_PROJECTS_COUNT: number = 6;
const INCREMENT_COUNT: number = 3;

const ProjectsSection = () => {
  const [displayPosts, setDisplayPosts] = useState(INITIAL_PROJECTS_COUNT);

  const loadMore = () => setDisplayPosts(displayPosts + INCREMENT_COUNT);

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
        {projectsSection
          .slice(0, displayPosts)
          .map(({ title, subtitle, label, text, src, srcHover }, index) => {
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
          })}
      </div>
      {/* <LinkButton href="/projects" size="l" style={{ margin: '0 auto' }}>
        LOAD MORE PROJECTS
      </LinkButton> */}
      <button
        className={styles.button}
        onClick={loadMore}
        disabled={displayPosts >= projectsSection.length}
      >
        load more projects
      </button>
    </section>
  );
};

export default ProjectsSection;

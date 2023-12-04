import { projectsSection } from '@/common/mocks/projects';
import styles from './BlueBlockSection.module.css';
import Card from './Card/Card';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import FormSection from '@/components/FormSection/FormSection';

interface IKeyOutcome {
  title: string;
  content: string;
  icon: JSX.Element;
}

interface BlueSectionProps {
  keyOutcomes: IKeyOutcome[];
}

const BlueBlockSection = ({ keyOutcomes }: BlueSectionProps) => {
  return (
    <section className={styles.wrapper}>
      <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
        <h2 className={styles.heading}>Key Outcomes</h2>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '150px',
          }}
        >
          {keyOutcomes &&
            keyOutcomes.map((item, index) => (
              <li key={item.title + index} style={{ width: '588px' }}>
                <Card {...item} />
              </li>
            ))}
        </ul>
        <div style={{ marginBottom: '150px' }}>
          <h2 className={styles.heading}>more projects</h2>
          <ProjectCard {...projectsSection[1]} index={1} />
        </div>
      </div>
      <FormSection />
    </section>
  );
};

export default BlueBlockSection;

import Image from 'next/image';
import styles from './ProjectInfoSection.module.css';

interface IImage {
  src: string;
  width: number;
  height: number;
}

interface ProjectInfoProps {
  title: string;
  year: number;
  info: string[];
  actions: {
    title: string;
    values: {
      [key: string]: string;
    };
  };
  images: IImage[][];
}

const ProjectInfoSection = ({
  title,
  year,
  info,
  actions,
  images,
}: ProjectInfoProps) => (
  <section className={styles.wrapper}>
    {title && <h2 className={styles.mainHeading}>{title}</h2>}
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '15px',
        }}
      >
        <span className={styles.textDesc}>Year</span>
        {year && (
          <span className={styles.textMain} style={{ opacity: 1 }}>
            {year}
          </span>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
        <div style={{ display: 'flex', gap: '24px' }}>
          {info &&
            info.map((paragraph, index) => (
              <p key={index} className={styles.mainText}>
                {paragraph}
              </p>
            ))}
        </div>
        <div style={{ textAlign: 'left' }}>
          {actions && <div className={styles.heading}>{actions.title}</div>}
          {actions &&
            Object.entries(actions.values).map((entry, index) => (
              <div key={`${entry}${index}`} className={styles.actionRow}>
                <span className={styles.mainText}>{entry[0]}</span>
                <span className={styles.mainText}>{entry[1]}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
    <div className={styles.gallery}>
      {images &&
        images.map((row, index) => (
          <div key={`row${index}`} style={{ display: 'flex', gap: '24px' }}>
            {row.map(({ src, width, height }, index) => (
              <Image
                key={src + index}
                src={src}
                alt={`${title} image`}
                width={width}
                height={height}
              />
            ))}
          </div>
        ))}
    </div>
  </section>
);

export default ProjectInfoSection;

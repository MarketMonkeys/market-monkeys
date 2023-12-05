import Image from 'next/image';
import styles from './page.module.css';
import ScrollIcon from '@/components/Icons/ScrollIcon';
import { FULL_PROJECTS_INFO } from '@/common/mocks/project';
import ProjectInfoSection from '@/pages/[Project]/ProjectsSection/ProjectInfoSection';
import BlueBlockSection from '@/pages/[Project]/BlueBlockSection/BlueBlockSection';
import { notFound } from 'next/navigation';

interface IKeyOutcome {
  title: string;
  content: string;
  icon: JSX.Element;
}
interface IImage {
  src: string;
  width: number;
  height: number;
}

interface IProject {
  id: string;
  mainImage: string;
  label: string;
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
  keyOutcomes: IKeyOutcome[];
}

export default function Project({ params }: { params: { slug: string } }) {
  const project: IProject = FULL_PROJECTS_INFO.find(
    ({ id }) => id === params.slug
  )!;
  if (!project) notFound();
  const { label, mainImage } = project;
  return (
    <section>
      <div className={styles.background}>
        <Image
          src={mainImage}
          alt="Case bg"
          priority={true}
          width={734}
          height={560}
        />
      </div>
      <div className={styles.contentImgWrapper}>
        <div
          style={{
            maxWidth: '1550px',
            width: '100%',
            height: '100%',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <div
            style={{
              bottom: '40px',
              left: '120px',
              position: 'absolute',
              zIndex: 2,
            }}
          >
            <p className={styles.text}>{label}</p>
          </div>
          <div
            style={{
              bottom: '40px',
              right: '120px',
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              zIndex: 2,
            }}
          >
            <p style={{ marginRight: '10px' }} className={styles.text}>
              Scroll down for more
            </p>
            <ScrollIcon />
          </div>
        </div>
        <div className={styles.shadow}></div>
      </div>
      <ProjectInfoSection {...project} />
      <BlueBlockSection keyOutcomes={project.keyOutcomes} />
    </section>
  );
}

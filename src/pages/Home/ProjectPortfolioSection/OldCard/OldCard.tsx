import DoneIcon from '@/components/Icons/DoneIcon';
import styles from './OldCard.module.css';
import LinkButton from '@/components/LinkButton/LinkButton';
import Image from 'next/image';

interface OldCardProps {
  title: string;
  index: number;
  subtitle: string;
  text: string;
  src: string;
  label?: string;
  isReversed: boolean;
}

const OldCard = ({
  title,
  index,
  subtitle,
  text,
  label,
  src,
  isReversed,
}: OldCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.cardWrapper}
        style={{ order: isReversed ? '2' : '1' }}
      >
        <div className={styles.headingWrapper}>
          <h4 className={styles.heading}>{title}</h4>
          <span className={styles.index}>0{index}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div className={styles.imgWrapper}>
              <DoneIcon />
            </div>
            <h5 className={styles.subtitle}>{subtitle}</h5>
            <p className={styles.text}>{text}</p>
            {label && <span className={styles.label}>{label}</span>}
          </div>
          <LinkButton
            variant="secondary"
            href="/"
            style={{ alignSelf: 'flex-end', height: 'fit-content' }}
          >
            Explore
          </LinkButton>
        </div>
      </div>
      <div
        style={{
          order: isReversed ? '1' : '2',
          overflow: 'hidden',
          borderRadius: '10px',
        }}
      >
        <Image
          draggable={false}
          src={src}
          width={588}
          height={330}
          alt={`${title} image`}
          className={styles.image}
          quality={100}
        />
      </div>
    </div>
  );
};

export default OldCard;

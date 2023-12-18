'use client';
import { useState } from 'react';
import DoneIcon from '@/components/Icons/DoneIcon';
import styles from './ProjectCard.module.css';
import LinkButton from '@/components/LinkButton/LinkButton';
import Image from 'next/image';
import { useSpring, animated, useChain, useSpringRef } from '@react-spring/web';
import { useDebounce } from '@/hooks/useDebounce';
import { usePathname } from 'next/navigation';

interface ProjectCardProps {
  id?: string;
  title: string;
  index: number;
  subtitle: string;
  text: string;
  src: string;
  srcHover: string;
  label?: string;
}

const ProjectCard = ({
  id,
  title,
  index,
  subtitle,
  text,
  label,
  src,
  srcHover,
}: ProjectCardProps) => {
  const pathname = usePathname();
  const isBlueBackgroundOnHover =
    pathname?.startsWith('/projects/') && !!pathname.split('/')[2];

  const [isHover, setIsHover] = useState<boolean>(false);
  const THREE_HUNDRED_MS: number = 300;
  const debouncedValue = useDebounce<boolean>(isHover, THREE_HUNDRED_MS);
  const isEvenIndex = index % 2 === 0;

  const springRef = useSpringRef();
  const springs = useSpring({
    ref: springRef,
    x: debouncedValue ? (isEvenIndex ? -1000 : 1000) : 0,
    delay: debouncedValue ? 100 : THREE_HUNDRED_MS,
    config: { duration: THREE_HUNDRED_MS },
  });
  const springScaleRef = useSpringRef();
  const springsScale = useSpring({
    ref: springScaleRef,
    scale: debouncedValue ? 0.8 : 1,
    delay: debouncedValue ? 0 : THREE_HUNDRED_MS,
    config: { duration: 100 },
  });

  const hoverSpringRef = useSpringRef();
  const hoverSprings = useSpring({
    ref: hoverSpringRef,
    x: debouncedValue ? 0 : isEvenIndex ? -1000 : 1000,
    delay: debouncedValue ? THREE_HUNDRED_MS : 100,
    config: { duration: THREE_HUNDRED_MS },
  });
  const hoverSpringScaleRef = useSpringRef();
  const hoverSpringsScale = useSpring({
    ref: hoverSpringScaleRef,
    scale: debouncedValue ? 1 : 0.8,
    delay: debouncedValue ? THREE_HUNDRED_MS : 0,
    config: { duration: 100 },
  });

  useChain(
    debouncedValue ? [springScaleRef, springRef] : [springRef, springScaleRef]
  );
  useChain(
    debouncedValue
      ? [hoverSpringRef, hoverSpringScaleRef]
      : [hoverSpringScaleRef, hoverSpringRef]
  );

  return (
    <div
      className={`${styles.wrapper} ${
        isBlueBackgroundOnHover && styles.blueWrapper
      }`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`${styles.cardWrapper}`}
        style={
          isEvenIndex
            ? {
                paddingLeft: '22px',
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }
            : {
                paddingRight: '22px',
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }
        }
      >
        <div className={styles.headingWrapper}>
          <h4 className={styles.heading}>{title}</h4>
          <span className={styles.index}>0{index}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className={styles.descriptionBlock}>
            <div className={styles.imgWrapper}>
              <DoneIcon />
            </div>
            <h5 className={styles.subtitle}>{subtitle}</h5>
            <p className={styles.text}>{text}</p>
            {label && <span className={styles.label}>{label}</span>}
          </div>
          <LinkButton
            variant="secondary"
            href={`/projects/${id}`}
            style={{ alignSelf: 'flex-end', height: 'fit-content' }}
          >
            Explore
          </LinkButton>
        </div>
      </div>
      <div
        className={styles.imageWrapper}
        style={
          isEvenIndex
            ? { paddingRight: '22px', textAlign: 'left' }
            : { paddingLeft: '22px', textAlign: 'right' }
        }
      >
        <animated.div style={{ ...springs, ...springsScale }}>
          <Image
            draggable={false}
            src={src}
            width={522}
            height={300}
            alt={`${title} image`}
            quality={100}
          />
        </animated.div>
        <animated.div
          className={styles.hoverImage}
          style={{ ...hoverSprings, ...hoverSpringsScale }}
        >
          <Image
            draggable={false}
            src={srcHover}
            width={600}
            height={358}
            alt={`${title} image`}
            quality={100}
          />
        </animated.div>
      </div>
    </div>
  );
};

export default ProjectCard;

"use client";
import { useState } from "react";
import DoneIcon from "@/components/Icons/DoneIcon";
import styles from "./OldCard.module.css";
import LinkButton from "@/components/LinkButton/LinkButton";
import Image from "next/image";
import { useSpring, animated, useChain, useSpringRef } from "@react-spring/web";

interface OldCardProps {
  title: string;
  index: number;
  subtitle: string;
  text: string;
  src: string;
  srcHover: string;
  label?: string;
}

const OldCard = ({
  title,
  index,
  subtitle,
  text,
  label,
  src,
  srcHover
}: OldCardProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const isEvenIndex = index % 2 === 0;

  const springRef = useSpringRef();
  const springs = useSpring({
    ref: springRef,
    x: isHover ? (isEvenIndex ? -1000 : 1000) : 0,
    config: { duration: 500 },
    delay: isHover ? 0 : 600
  });
  const springScaleRef = useSpringRef();
  const springsScale = useSpring({
    ref: springScaleRef,
    scale: isHover ? 0.8 : 1,
    delay: isHover ? 0 : 600
  });

  const hoverSpringRef = useSpringRef();
  const hoverSprings = useSpring({
    ref: hoverSpringRef,
    x: isHover ? 0 : isEvenIndex ? -1000 : 1000,
    config: { duration: 500 },
    delay: isHover ? 500 : 0
  });
  const hoverSpringScaleRef = useSpringRef();
  const hoverSpringsScale = useSpring({
    ref: hoverSpringScaleRef,
    scale: isHover ? 1 : 0.8,
    // y: isHover ? -30 : 0,
    delay: isHover ? 500 : 0
  });

  useChain(isHover ? [springScaleRef, springRef] : [springRef, springScaleRef]);
  useChain(
    isHover
      ? [hoverSpringRef, hoverSpringScaleRef]
      : [hoverSpringScaleRef, hoverSpringRef]
  );

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={styles.cardWrapper}
        style={
          isEvenIndex
            ? {
                paddingLeft: "22px",
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0px"
              }
            : {
                paddingRight: "22px",
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0px"
              }
        }
      >
        <div className={styles.headingWrapper}>
          <h4 className={styles.heading}>{title}</h4>
          <span className={styles.index}>0{index}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
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
            href="/"
            style={{ alignSelf: "flex-end", height: "fit-content" }}
          >
            Explore
          </LinkButton>
        </div>
      </div>
      <div
        className={styles.imageWrapper}
        style={
          isEvenIndex
            ? { paddingRight: "22px", textAlign: "left" }
            : { paddingLeft: "22px", textAlign: "right" }
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

export default OldCard;

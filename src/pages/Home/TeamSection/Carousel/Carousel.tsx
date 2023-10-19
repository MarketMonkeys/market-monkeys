"use client";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";
import styles from "./Carousel.module.css";
import { useRef } from "react";
import ButtonArrow from "@/components/ButtonArrow/ButtonArrow";
import ArrowLeftIcon from "@/components/Icons/ArrowLeftIcon";
import ArrowRightIcon from "@/components/Icons/ArrowRightIcon";

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: true,
  arrows: false,
};

const Carousel = () => {
  const ref = useRef<null | Slider>(null);

  const handleNextSlide = () => {
    ref?.current?.slickNext();
  };

  const handlePrevSlide = () => {
    ref?.current?.slickPrev();
  };

  return (
    <div style={{ marginBottom: "120px" }}>
      <div
        style={{
          marginBottom: "80px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <h2 className={styles.heading}>meet our team</h2>
        <div className={styles.buttonsWrapper}>
          <ButtonArrow onClick={handlePrevSlide}>
            <ArrowLeftIcon />
          </ButtonArrow>
          <ButtonArrow onClick={handleNextSlide}>
            <ArrowRightIcon />
          </ButtonArrow>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className={styles.teamWrapper}>
          <h3 className={styles.subheading}>
            Market Monkeys <br /> Team
          </h3>
          <p className={styles.text}>
            We create a unique brand,
            <br /> thereby ncreasing your visibility
            <br /> and sales. The brand always
            <br /> works for you!
          </p>
        </div>
        <Slider {...settings} className={styles.slider} ref={ref}>
          <Slide
            src="/images/nikita.png"
            fullName="Nikita Osaulenko"
            position="Chief Executive Officer"
          />
          <Slide
            src="/images/nikita.png"
            fullName="Nikita Osaulenko"
            position="Chief Executive Officer"
          />
          <Slide
            src="/images/nikita.png"
            fullName="Nikita Osaulenko"
            position="Chief Executive Officer"
          />
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;

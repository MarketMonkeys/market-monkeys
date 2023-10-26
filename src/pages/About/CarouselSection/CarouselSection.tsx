"use client";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import styles from "./CarouselSection.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings: Settings = {
  centerMode: true,
  centerPadding: "0px",
  autoplay: true,
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const CarouselSection = () => {
  return (
    <Slider {...settings} className={styles.slider}>
      <div className={styles.sliderSlide}>
        <Image
          src="/images/about-page-carousel.png"
          alt={"test"}
          width={180}
          height={138}
          draggable="false"
        />
      </div>
      <div className={styles.sliderSlide}>
        <Image
          src="/images/about-page-carousel.png"
          alt={"test"}
          width={180}
          height={138}
          draggable="false"
        />
      </div>
      <div className={styles.sliderSlide}>
        <Image
          src="/images/about-page-carousel.png"
          alt={"test"}
          width={180}
          height={138}
          draggable="false"
        />
      </div>
      <div className={styles.sliderSlide}>
        <Image
          src="/images/about-page-carousel.png"
          alt={"test"}
          width={180}
          height={138}
          draggable="false"
        />
      </div>
      <div className={styles.sliderSlide}>
        <Image
          src="/images/about-page-carousel.png"
          alt={"test"}
          width={180}
          height={138}
          draggable="false"
        />
      </div>
      <div className={styles.sliderSlide}>
        <Image
          src="/images/about-page-carousel.png"
          alt={"test"}
          width={180}
          height={138}
          draggable="false"
        />
      </div>
    </Slider>
  );
};

export default CarouselSection;

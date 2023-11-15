'use client';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide from './Slide';
import styles from './Carousel.module.css';
import { useRef } from 'react';
import ButtonArrow from '@/components/ButtonArrow/ButtonArrow';
import ArrowLeftIcon from '@/components/Icons/ArrowLeftIcon';
import ArrowRightIcon from '@/components/Icons/ArrowRightIcon';
import { WORKFLOW_STAGES } from '@/common/mocks/services';

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
    <div>
      <div
        style={{
          marginBottom: '80px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <h2 className={styles.heading}>Workflow Stages</h2>
        <div className={styles.buttonsWrapper}>
          <ButtonArrow onClick={handlePrevSlide}>
            <ArrowLeftIcon />
          </ButtonArrow>
          <ButtonArrow onClick={handleNextSlide}>
            <ArrowRightIcon />
          </ButtonArrow>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.teamWrapper}>
          <h3 className={styles.subheading}>
            The Stages We Use
            <br /> in Our Work
          </h3>
          <p className={styles.text}>
            Our streamlined workflow ensures a seamless journey from concept to
            creation, delivering exceptional results every step of the project
            on the whole way.
          </p>
        </div>
        <Slider {...settings} ref={ref}>
          {WORKFLOW_STAGES.map((stage, index) => (
            <Slide {...stage} key={stage.title + index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;

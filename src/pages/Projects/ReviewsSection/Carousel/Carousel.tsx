'use client';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide from './Slide';
import styles from './Carousel.module.css';
import { useRef, useState } from 'react';
import ButtonArrow from '@/components/ButtonArrow/ButtonArrow';
import ArrowLeftIcon from '@/components/Icons/ArrowLeftIcon';
import ArrowRightIcon from '@/components/Icons/ArrowRightIcon';
import { REVIEWS } from '@/common/mocks/projects';

const settings: Settings = {
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: true,
};

const Carousel = () => {
  const ref = useRef<null | Slider>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const isActiveSlide = (index: number) => index === currentSlide;

  const handleNextSlide = () => ref?.current?.slickNext();

  const handlePrevSlide = () => ref?.current?.slickPrev();

  const handleBeforeSlideChange = (_: number, next: number) =>
    setCurrentSlide(next);

  const handleGoToSlide = (slideIndex: number) =>
    ref?.current?.slickGoTo(slideIndex);

  return (
    <div style={{ marginBottom: '120px' }}>
      <h2 className={styles.heading}>Customer Reviews</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Slider
          {...settings}
          beforeChange={handleBeforeSlideChange}
          className={styles.slider}
          ref={ref}
        >
          {REVIEWS.map((review, index) => (
            <Slide
              {...review}
              isActive={isActiveSlide(index)}
              key={`${review.project}${index}`}
            />
          ))}
        </Slider>
        <div className={styles.buttonsWrapper}>
          <ButtonArrow onClick={handlePrevSlide}>
            <ArrowLeftIcon />
          </ButtonArrow>
          <ul style={{ display: 'flex', gap: '9.5px', alignItems: 'center' }}>
            {REVIEWS.map((_, index) => (
              <li
                key={`dot${index}`}
                style={{
                  background: 'var(--white)',
                  borderRadius: '100%',
                  cursor: 'pointer',
                }}
                className={
                  isActiveSlide(index)
                    ? styles.sliderActiveDot
                    : styles.sliderDot
                }
                onClick={() => handleGoToSlide(index)}
              ></li>
            ))}
          </ul>
          <ButtonArrow onClick={handleNextSlide}>
            <ArrowRightIcon />
          </ButtonArrow>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

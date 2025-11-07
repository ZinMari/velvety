"use client";

import cl from "clsx";

import styles from "./style.module.scss";
import { useEffect, useState } from "react";

interface SliderProps {
  items: React.ReactNode[];
  className?: string;
  autoPlay?: boolean;
  autoPlayTime?: number;
}

const Slider: React.FC<SliderProps> = ({
  className,
  items,
  autoPlay = true,
  autoPlayTime = 1000,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const handlePreviousClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? items.length - 1 : currentImageIndex - 1
    );
  };

  const handleNextClick = () => {
    // (currentIndex + 1) % totalImages гарантирует, что по достижению последнего изображения, оно автоматически вернется к первому.
    setCurrentImageIndex((currentImageIndex + 1) % items.length);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      handleNextClick();
    }
    if (direction < -10) {
      handlePreviousClick();
    }

    setTouchPosition(null);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     handleNextClick();
  //   }, autoPlayTime);

  //   return () => clearTimeout(timer);
  // }, [currentImageIndex]);

  return (
    <div className={cl(styles.slider, className)}>
      <button
        className={cl(styles.sliderBtn, styles.sliderBtnPrev)}
        onClick={handlePreviousClick}
      >
        Prev
      </button>
      <ul onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        {items.map((item, index) => (
          <li
            className={
              currentImageIndex === index ? styles.block : styles.hidden
            }
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
      <button
        className={cl(styles.sliderBtn, styles.sliderBtnNext)}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;

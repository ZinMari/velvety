"use client";

import cl from "clsx";

import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import ArrowButton from "../ArrowButton";
import Dot from "../Dot";

interface SliderProps {
  items: React.ReactNode[];
  className?: string;
  autoPlay?: boolean;
  autoPlayTime?: number;
  arrowsLocation?: "right" | "left";
  controlsTheme?: "light" | "dark";
}

const Slider: React.FC<SliderProps> = ({
  className,
  items,
  autoPlay = true,
  autoPlayTime = 1000,
  arrowsLocation = "right",
  controlsTheme = "dark",
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

  const handleDotClick = (sliderNumber: number) => {
    setCurrentImageIndex(sliderNumber);
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

  const renderDots = (theme: "dark" | "light") => {
    const dots = [];

    for (let i = 0; i < items.length; i++) {
      dots.push(
        <Dot
          key={`dot-${i}`}
          number={i}
          onClick={handleDotClick}
          isActive={i === currentImageIndex}
          theme={theme}
        />
      );
    }
    return dots;
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     handleNextClick();
  //   }, autoPlayTime);

  //   return () => clearTimeout(timer);
  // }, [currentImageIndex]);

  return (
    <div
      className={cl(
        styles.slider,
        className,
        arrowsLocation === "left" && styles.sliderReverse
      )}
    >
      <div
        className={styles.sliderSlider}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <ul
          className={styles.sliderWrapper}
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <li className={styles.sliderSlide} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={cl(styles.sliderControls)}>
        <ArrowButton
          onClick={handleNextClick}
          type="right"
          theme={controlsTheme}
        />
        <div className={styles.sliderDots}>{renderDots(controlsTheme)}</div>
        <ArrowButton
          onClick={handlePreviousClick}
          type="left"
          theme={controlsTheme}
        />
      </div>
    </div>
  );
};

export default Slider;

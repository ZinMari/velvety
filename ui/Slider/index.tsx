import StarRating from "../StarRating";

import cl from "clsx";

import styles from "./style.module.scss";
import { useState } from "react";

interface SliderProps {
  items: React.ReactNode[];
  className?: string;
  autoPlay: boolean;
  autoPlayTime: number;
}

const Slider: React.FC<SliderProps> = ({
  className,
  items,
  autoPlay = true,
  autoPlayTime = 1000,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handlePreviousClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? items.length - 1 : currentImageIndex - 1
    );
  };

  const handleNextClick = () => {
    // (currentIndex + 1) % totalImages гарантирует, что по достижению последнего изображения, оно автоматически вернется к первому.
    setCurrentImageIndex((currentImageIndex + 1) % items.length);
  };
  return <div></div>;
};

export default Slider;

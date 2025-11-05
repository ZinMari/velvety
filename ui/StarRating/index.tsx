import cl from "clsx";
import { IconStar } from "../Icons";

let nextId = 0;

const generateStarIds = (count: number) => {
  return Array.from({ length: count }, () => `star-${nextId++}`);
};

interface StarRatingProps {
  value: number;
  className?: string;
  iconSize?: number;
  maxStars?: number;
  color?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  className,
  color = "var(--color-green-middle)",
  iconSize = 18,
  maxStars = 5,
  value,
}) => {
  const starIds = generateStarIds(maxStars);

  const getStarStyle = (index: number) => {
    const difference = value - index;

    if (difference <= 0) return { color: "gray", fill: "transparent" };
    if (difference >= 1) return { color: color, fill: color };

    return {
      color: color,
      fill: `url(#${starIds[index]})`,
    } as React.CSSProperties;
  };

  const renderGradientDefs = () => {
    const partialStarIndex = Math.floor(value);
    const partialFill = (value % 1) * 100;

    // Only create gradient for partial star
    if (partialFill > 0) {
      return (
        <linearGradient
          id={starIds[partialStarIndex]}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset={`${partialFill}%`} stopColor={color} />
          <stop offset={`${partialFill}%`} stopColor="transparent" />
        </linearGradient>
      );
    }
    return null;
  };

  const renderStars = () => {
    return Array.from({ length: maxStars }).map((_, index) => {
      const style = getStarStyle(index);
      return <IconStar key={index} style={style} width={iconSize} />;
    });
  };

  return (
    <div className={cl(className)}>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>{renderGradientDefs()}</defs>
      </svg>
      {renderStars()}
    </div>
  );
};

export default StarRating;

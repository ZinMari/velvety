import cl from "clsx";
import styles from "./style.module.scss";
import { IconArrow } from "../Icons";

interface ArrowButton {
  className?: string;
  color?: string;
  type?: "left" | "right";
  onClick?: () => void;
}

const ArrowButton: React.FC<ArrowButton> = ({
  className,
  color = "var(--color-green-dark)",
  type = "right",
  onClick,
}) => {
  return (
    <button
      className={cl(
        styles.arrowButton,
        {
          [styles.arrowButtonLeft]: type === "left",
        },
        className
      )}
      onClick={onClick}
    >
      <IconArrow
        className={styles.arrowButtonArrow}
        fill={color}
        stroke={color}
        strokeWidth={1}
      />
    </button>
  );
};

export default ArrowButton;

import cl from "clsx";
import styles from "./style.module.scss";
import { IconArrow } from "../Icons";

interface ArrowButton {
  className?: string;
  theme?: "light" | "dark";
  type?: "left" | "right";
  onClick?: () => void;
}

const ArrowButton: React.FC<ArrowButton> = ({
  className,
  theme = "dark",
  type = "right",
  onClick,
}) => {
  const color =
    theme === "dark" ? "var(--color-green-dark)" : "var(--color-green-light)";
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

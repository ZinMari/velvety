import clsx from "clsx";
import styles from "./style.module.scss";

interface DotProps {
  number: number;
  onClick: (number: number) => void;
  className?: string;
  theme?: "light" | "dark";
}

const Dot: React.FC<DotProps> = ({
  theme = "dark",
  number,
  className,
  onClick,
}) => {
  return (
    <button
      className={clsx(styles.dot, className)}
      onClick={() => onClick(number)}
    >
      <span
        className={clsx(styles.dotVisible, {
          [styles.dotVisibleLight]: theme === "light",
        })}
      ></span>
    </button>
  );
};

export default Dot;

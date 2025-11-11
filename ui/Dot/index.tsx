import clsx from "clsx";
import styles from "./style.module.scss";

interface DotProps {
  number: number;
  className?: string;
  theme?: "light" | "dark";
  onClick?: () => void;
}

const Dot: React.FC<DotProps> = ({
  theme = "dark",
  number,
  className,
  onClick,
}) => {
  return (
    <button className={clsx(styles.dot, className)} onClick={onClick}>
      <span
        className={clsx(styles.dotVisible, {
          [styles.dotVisibleLight]: theme === "light",
        })}
      ></span>
    </button>
  );
};

export default Dot;

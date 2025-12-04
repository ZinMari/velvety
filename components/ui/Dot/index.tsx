import clsx from "clsx";
import styles from "./style.module.scss";

interface DotProps {
  number: number;
  onClick: (number: number) => void;
  className?: string;
  theme?: "light" | "dark";
  isActive?: boolean;
}

const Dot: React.FC<DotProps> = ({
  theme = "dark",
  number,
  className,
  onClick,
  isActive,
}) => {
  const themeSuffix = theme === "dark" ? "Dark" : "Light";

  return (
    <button
      className={clsx(styles.dot, className)}
      onClick={() => onClick(number)}
    >
      <span
        className={clsx(
          styles.dotVisible,
          styles[`dotVisible${themeSuffix}`],
          isActive && styles[`dotVisible${themeSuffix}Active`]
        )}
      ></span>
    </button>
  );
};

export default Dot;

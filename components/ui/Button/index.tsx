import clsx from "clsx";
import styles from "./style.module.scss";

import { IconArrow } from "../Icons";

interface ButtonProps {
  children: string;
  className?: string;
  isBorder?: boolean;
  type?: "min" | "max";
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  isBorder = true,
  type = "min",
}) => {
  return (
    <button
      className={clsx(
        className,
        styles.button,
        isBorder && styles.buttonBorder,
        type === "max" && styles.buttonMax
      )}
    >
      {children}
      <IconArrow fill="currentColor" width="30" />
    </button>
  );
};

export default Button;

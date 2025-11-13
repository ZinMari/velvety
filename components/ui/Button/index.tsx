import clsx from "clsx";
import styles from "./style.module.scss";

import { IconArrow } from "../Icons";

interface ButtonProps {
  className?: string;
  isBorder?: boolean;
  children: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  isBorder = true,
}) => {
  return (
    <button
      className={clsx(
        className,
        styles.button,
        isBorder && styles.buttonBorder
      )}
    >
      {children}
      <IconArrow fill="currentColor" width="30" />
    </button>
  );
};

export default Button;

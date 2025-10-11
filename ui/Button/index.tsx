import clsx from "clsx";
import styles from "./style.module.scss";

import { IconArrow } from "../Icons";

interface ButtonProps {
  className?: string;
  children: string;
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button className={clsx(className, styles.button)}>
      {children}
      <IconArrow fill="currentColor" width="30" />
    </button>
  );
};

export default Button;

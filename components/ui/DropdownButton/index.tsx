import React from "react";
import { DropdownContext } from "../Dropdown";

import cl from "clsx";
import styles from "./style.module.scss";

interface DropdownButtonProps {
  className?: string;
  children?: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  children,
  className,
}) => {
  const { open, setOpen } = React.useContext(DropdownContext);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <button onClick={toggleOpen} className={cl(styles.dropdown, className)}>
      {children}
      {
        <span
          className={cl(
            className,
            styles.dropdownMark,
            open && styles.dropdownMarkOpen
          )}
        ></span>
      }
    </button>
  );
};

export default DropdownButton;

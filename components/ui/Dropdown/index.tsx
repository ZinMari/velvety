"use client";

import React from "react";
import DropdownButton from "../DropdownButton";
import { TMenuItem } from "../Menu";
import DropdownContent from "../DropdownContent";

import styles from "./style.module.scss";

interface DropdownProps {
  className?: string;
  label?: string;
  children?: TMenuItem[];
}

export const DropdownContext = React.createContext({
  open: false,
  setOpen: (value: boolean) => {},
});

const Dropdown: React.FC<DropdownProps> = ({ children, label, className }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className={styles.dropdown}>
        <DropdownButton className={className}>{label}</DropdownButton>
        <DropdownContent>{children}</DropdownContent>
      </div>
    </DropdownContext.Provider>
  );
};

export default Dropdown;

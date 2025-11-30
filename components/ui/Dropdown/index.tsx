"use client";

import React, { createContext, useEffect, useRef } from "react";
import DropdownButton from "../DropdownButton";
import { TMenuItem } from "../Menu";
import DropdownContent from "../DropdownContent";

import styles from "./style.module.scss";

interface DropdownProps {
  className?: string;
  label?: string;
  children?: TMenuItem[];
}

export const DropdownContext = createContext({
  open: false,
  setOpen: (value: boolean) => {},
});

const Dropdown: React.FC<DropdownProps> = ({ children, label, className }) => {
  const [open, setOpen] = React.useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function close(e: PointerEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      window.addEventListener("click", close);
    }

    return function removeListener() {
      window.removeEventListener("click", close);
    };
  }, [open]);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={dropdownRef} className={styles.dropdown}>
        <DropdownButton className={className}>{label}</DropdownButton>
        <DropdownContent>{children}</DropdownContent>
      </div>
    </DropdownContext.Provider>
  );
};

export default Dropdown;

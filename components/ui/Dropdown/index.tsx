"use client";

import React from "react";
import DropdownButton from "../DropdownButton";
import { TMenuItem } from "../Menu";

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
      <DropdownButton className={className}>{label}</DropdownButton>
      <div className="relative"></div>
    </DropdownContext.Provider>
  );
};

export default Dropdown;

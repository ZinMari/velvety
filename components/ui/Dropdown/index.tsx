"use client";

import React from "react";
import DropdownButton from "../DropdownButton";

interface DropdownProps {
  className?: string;
  children?: string;
}

export const DropdownContext = React.createContext({
  open: false,
  setOpen: (value: boolean) => {},
});

const Dropdown: React.FC<DropdownProps> = ({ children, ...props }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className="relative">{children}</div>
    </DropdownContext.Provider>
  );
};

export default Dropdown;

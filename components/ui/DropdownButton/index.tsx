import React from "react";
import Dropdown, { DropdownContext } from "../Dropdown";

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
    <button onClick={toggleOpen} className={className}>
      {children}
    </button>
  );
};

export default DropdownButton;

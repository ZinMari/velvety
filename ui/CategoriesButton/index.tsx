"use client";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useState } from "react";

interface CategoriesButtonProps {
  text: string;
  className?: string;
  isActive?: boolean;
}

const CategoriesButton: React.FC<CategoriesButtonProps> = ({
  className,
  text = "Button text",
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={clsx(
        styles.categoriesButton,
        isActive && styles.categoriesButtonActive,
        className
      )}
    >
      {text}
    </button>
  );
};

export default CategoriesButton;

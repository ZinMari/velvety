"use client";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useState } from "react";
import { TCategories } from "../../sections/AllProductsSection";

interface CategoriesButtonProps {
  text: string;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoriesButton: React.FC<CategoriesButtonProps> = ({
  className,
  onClick,
  text = "Button text",
  isActive = false,
}) => {
  return (
    <button
      onClick={onClick}
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

"use client";

import Link from "next/link";
import { TMenuItem } from "../Menu";

import cl from "clsx";
import styles from "./style.module.scss";

interface MenuItemProps {
  className?: string;
  label: string;
  url: string;
  children: null | TMenuItem[];
}

const MenuItem: React.FC<MenuItemProps> = ({
  className,
  url,
  children,
  label,
}) => {
  return (
    <li className={cl(styles.menuItem, className)}>
      <div className={styles.menuItemContent}>
        <Link href={url} className={styles.menuItemLink}>
          {label}
          {children && <span className={styles.menuItemMark}></span>}
        </Link>
      </div>
      {children && <div className={styles.menuItemDropdown}>drop</div>}
    </li>
  );
};

export default MenuItem;

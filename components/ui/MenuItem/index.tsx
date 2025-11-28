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
      {children ? (
        <Link href={url} className={styles.menuItemLink}>
          {label}
          <span className={styles.menuItemMark}></span>
        </Link>
      ) : (
        <Link href={url} className={styles.menuItemLink}>
          {label}
        </Link>
      )}
    </li>
  );
};

export default MenuItem;

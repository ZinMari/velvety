import styles from "./style.module.scss";

import Link from "next/link";
import { TMenuItem } from "../Menu";

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
    <li className={className}>
      <div className={styles.menuItemContent}>
        <Link href={url} className={styles.menuItemLink}>
          {label}
          {children && <span className={styles.menuItemMark}></span>}
        </Link>
      </div>
      {children && (
        <div className={styles.menuItemDropdown}>1111111111111111111111111</div>
      )}
    </li>
  );
};

export default MenuItem;

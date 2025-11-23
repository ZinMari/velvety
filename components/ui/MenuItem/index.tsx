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
      <Link href={url} className={styles.menuLink}>
        {label}
        {children && <span className={styles.menuLinkMark}></span>}
      </Link>
    </li>
  );
};

export default MenuItem;

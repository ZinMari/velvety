import cl from "clsx";
import styles from "./style.module.scss";

import Link from "next/link";

interface MenuItemProps {
  children: string;
  url: string;
  className?: string;
  isSubMenu?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  className,
  url,
  children,
  isSubMenu = false,
}) => {
  return (
    <li className={className}>
      <Link href={url} className={styles.menuLink}>
        {children}
        {isSubMenu && <span className={styles.menuLinkMark}></span>}
      </Link>
    </li>
  );
};

export default MenuItem;

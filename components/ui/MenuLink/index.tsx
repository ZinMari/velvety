import cl from "clsx";
import styles from "./style.module.scss";

import Link from "next/link";

interface MenuLinkProps {
  children: string;
  url: string;
  className?: string;
  isSubMenu?: boolean;
}

const MenuLink: React.FC<MenuLinkProps> = ({
  className,
  url,
  children,
  isSubMenu = false,
}) => {
  return (
    <Link href={url} className={cl(styles.menuLink, className)}>
      {children}
      {isSubMenu && <span className={styles.menuLinkMark}></span>}
    </Link>
  );
};

export default MenuLink;

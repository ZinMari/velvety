import clsx from "clsx";
import Logo from "../Logo";

import styles from "./style.module.scss";
import Menu from "../Menu";
import MenuLink from "../MenuItem";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={clsx(styles.header, className)}>
      <div className={styles.headerLogo}>
        <Logo />
      </div>
      <div className={styles.headerMenu}>
        <Menu />
      </div>
      <div className={styles.headerUserPanel}>
        <Link href={"#"}>Login</Link>
        <Link href={"#"}>Cart(0)</Link>
      </div>
    </header>
  );
};

export default Header;

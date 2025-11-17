import clsx from "clsx";
import Logo from "../Logo";

import styles from "./style.module.scss";
import Menu from "../Menu";

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
    </header>
  );
};

export default Header;

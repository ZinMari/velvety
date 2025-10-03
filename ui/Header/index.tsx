import clsx from "clsx";
import Logo from "../Logo";

import styles from "./style.module.scss";

interface HeaderProps {
  className?: string;
}

const NAV_MENUS = [
  ["Pages", "Shop", "About"],
  ["Login", "Cart(0)"],
];

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={clsx(styles.header, className)}>
      <div className={styles.headerLogo}>
        <Logo />
      </div>
      <nav className={styles.headerNav}>
        {NAV_MENUS.map((menu, index) => (
          <ul className={styles.headerList} key={index}>
            {menu.map((link, index) => (
              <li key={`${index}_${link}`}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        ))}
      </nav>
    </header>
  );
};

export default Header;

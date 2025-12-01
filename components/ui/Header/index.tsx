"use client";

import clsx from "clsx";
import Logo from "../Logo";

import styles from "./style.module.scss";
import Menu from "../Menu";
import Link from "next/link";
import Burger from "../Burger";
import { useState } from "react";
import Container from "../Container";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={clsx(styles.header, className)}>
      <Container className={styles.headerContainer}>
        <div
          className={clsx(
            styles.headerLogo,
            isMenuOpen && styles.headerLogoOpen
          )}
        >
          <Logo />
        </div>
        <div className={styles.headerRightWrap}>
          <div className={styles.headerMenu}>
            <Menu isOpen={isMenuOpen} />
          </div>
          <div className={styles.headerUserPanel}>
            <Link className={styles.headerUserPanelShop} href={"#"}>
              Shop
            </Link>
            <Link className={styles.headerUserPanelLogin} href={"#"}>
              Login
            </Link>
            <Link className={styles.headerUserPanelCart} href={"#"}>
              Cart(0)
            </Link>
          </div>
          <div className={styles.headerBurger}>
            <Burger
              onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
              isOpen={isMenuOpen}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

"use client";

import Link from "next/link";
import { TMenuItem } from "../Menu";
import {
  Button,
  Disclosure,
  DisclosurePanel,
  Heading,
} from "react-aria-components";

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
        <Disclosure>
          <Button slot="trigger">System Requirements</Button>
          <DisclosurePanel className={cl(styles.menuItemDropdown)}>
            Details about system requirements here.
          </DisclosurePanel>
        </Disclosure>
      ) : (
        <Link href={url} className={styles.menuItemLink}>
          {label}
        </Link>
      )}
    </li>
  );
};

export default MenuItem;

import MenuItem from "../MenuItem";

import styles from "./style.module.scss";
import cl from "clsx";

interface MenuProps {
  className?: string;
  isOpen?: boolean;
}

export type TMenuItem = {
  id: number;
  label: string;
  url: string;
  children: null | TMenuItem[];
};

const MENU_DATA: TMenuItem[] = [
  {
    id: 1,
    label: "Pages",
    url: "/",
    children: [
      {
        id: 11,
        label: "Home",
        url: "/",
        children: null,
      },
      {
        id: 12,
        label: "About",
        url: "/",
        children: null,
      },
      {
        id: 13,
        label: "Shop",
        url: "/",
        children: null,
      },
      {
        id: 14,
        label: "Product Details",
        url: "/",
        children: null,
      },
      {
        id: 15,
        label: "Checkout",
        url: "/",
        children: null,
      },
      {
        id: 16,
        label: "Checkout Paypal",
        url: "/",
        children: null,
      },
      {
        id: 17,
        label: "Blog",
        url: "/",
        children: null,
      },
      {
        id: 18,
        label: "Blog Detail",
        url: "/",
        children: null,
      },
      {
        id: 19,
        label: "Order Confirmation",
        url: "/",
        children: null,
      },
      {
        id: 110,
        label: "Licenses",
        url: "/",
        children: null,
      },
      {
        id: 111,
        label: "Changelog",
        url: "/",
        children: null,
      },
      {
        id: 112,
        label: "Contact Us",
        url: "/",
        children: null,
      },
      {
        id: 113,
        label: "404",
        url: "/",
        children: null,
      },
      {
        id: 114,
        label: "401",
        url: "/",
        children: null,
      },
      {
        id: 115,
        label: "Styleguide",
        url: "/",
        children: null,
      },
    ],
  },
  {
    id: 2,
    label: "Shop",
    url: "/",
    children: null,
  },
  {
    id: 3,
    label: "About",
    url: "/",
    children: null,
  },
];

const Menu: React.FC<MenuProps> = ({ className, isOpen = false }) => {
  return (
    <nav className={cl(styles.menu, isOpen && styles.menuOpen, className)}>
      <ul className={styles.menuList}>
        {MENU_DATA.map(({ id, label, url, children }) => (
          <MenuItem key={id} {...{ label, url, children }} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;

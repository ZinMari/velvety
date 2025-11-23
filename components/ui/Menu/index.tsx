import clsx from "clsx";
import styles from "./style.module.scss";
import MenuItem from "../MenuItem";

interface MenuProps {
  className?: string;
}

const MENU_DATA = [
  [
    {
      id: 1,
      name: "Pages",
      url: "/",
      children: [
        {
          id: 11,
          name: "Home",
          url: "/",
          children: null,
        },
        {
          id: 12,
          name: "About",
          url: "/",
          children: null,
        },
        {
          id: 13,
          name: "Shop",
          url: "/",
          children: null,
        },
        {
          id: 14,
          name: "Product Details",
          url: "/",
          children: null,
        },
        {
          id: 15,
          name: "Checkout",
          url: "/",
          children: null,
        },
        {
          id: 16,
          name: "Checkout Paypal",
          url: "/",
          children: null,
        },
        {
          id: 17,
          name: "Blog",
          url: "/",
          children: null,
        },
        {
          id: 18,
          name: "Blog Detail",
          url: "/",
          children: null,
        },
        {
          id: 19,
          name: "Order Confirmation",
          url: "/",
          children: null,
        },
        {
          id: 110,
          name: "Licenses",
          url: "/",
          children: null,
        },
        {
          id: 111,
          name: "Changelog",
          url: "/",
          children: null,
        },
        {
          id: 112,
          name: "Contact Us",
          url: "/",
          children: null,
        },
        {
          id: 113,
          name: "404",
          url: "/",
          children: null,
        },
        {
          id: 114,
          name: "401",
          url: "/",
          children: null,
        },
        {
          id: 115,
          name: "Styleguide",
          url: "/",
          children: null,
        },
      ],
    },
    {
      id: 2,
      name: "Shop",
      url: "/",
      children: null,
    },
    {
      id: 3,
      name: "About",
      url: "/",
      children: null,
    },
  ],
];

const Menu: React.FC<MenuProps> = ({ className }) => {
  return (
    <nav className={styles.menu}>
      {MENU_DATA.map((menu, index) => (
        <ul className={styles.menuList} key={index}>
          {menu.map((item) => (
            <MenuItem url="#" key={item.id} isSubMenu={Boolean(item.children)}>
              {item.name}
            </MenuItem>
          ))}
        </ul>
      ))}
    </nav>
  );
};

export default Menu;

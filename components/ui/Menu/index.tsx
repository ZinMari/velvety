import clsx from "clsx";
import styles from "./style.module.scss";

interface MenuProps {
  className?: string;
}

const MENU_DATA = [
  [
    {
      id: 1,
      title: "Pages",
      url: "/",
      children: [
        {
          id: 11,
          title: "Home",
          url: "/",
          children: null,
        },
        {
          id: 12,
          title: "About",
          url: "/",
          children: null,
        },
        {
          id: 13,
          title: "Shop",
          url: "/",
          children: null,
        },
        {
          id: 14,
          title: "Product Details",
          url: "/",
          children: null,
        },
        {
          id: 15,
          title: "Checkout",
          url: "/",
          children: null,
        },
        {
          id: 16,
          title: "Checkout Paypal",
          url: "/",
          children: null,
        },
        {
          id: 17,
          title: "Blog",
          url: "/",
          children: null,
        },
        {
          id: 18,
          title: "Blog Detail",
          url: "/",
          children: null,
        },
        {
          id: 19,
          title: "Order Confirmation",
          url: "/",
          children: null,
        },
        {
          id: 110,
          title: "Licenses",
          url: "/",
          children: null,
        },
        {
          id: 111,
          title: "Changelog",
          url: "/",
          children: null,
        },
        {
          id: 112,
          title: "Contact Us",
          url: "/",
          children: null,
        },
        {
          id: 113,
          title: "404",
          url: "/",
          children: null,
        },
        {
          id: 114,
          title: "401",
          url: "/",
          children: null,
        },
        {
          id: 115,
          title: "Styleguide",
          url: "/",
          children: null,
        },
      ],
    },
    {
      id: 2,
      title: "Shop",
      url: "/",
      children: null,
    },
    {
      id: 3,
      title: "About",
      url: "/",
      children: null,
    },
  ],
  [
    {
      id: 4,
      title: "Login",
      url: "/",
      children: null,
    },
    {
      id: 5,
      title: "Cart(0)",
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
            <li key={item.id}>
              <a href="#">{item.title}</a>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
};

export default Menu;

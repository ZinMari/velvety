import clsx from "clsx";
import styles from "./style.module.scss";
import Logo from "../Logo";
import { IconFacebook, IconInstagram, IconX } from "../Icons";
import Container from "../Container";

interface FooterProps {
  className?: string;
}

const FOOTER_NAV = {
  Shop: ["Skincare", "Facial", "Soap", "Candles", "Auto Fragrances", "Gifts"],
  "Help Desk": [
    "Chat",
    "FAQ",
    "Shipping & Returns",
    "Contact",
    "Policies",
    "Accessibility",
    "My Account",
  ],
  Stores: [
    "Manhattan",
    "Brooklyn",
    "Tokyo",
    "Jakarta",
    "Paris",
    "Buenos Aires",
  ],
};

const FOOTER_DOCS = [
  { id: 1, name: "Licenses", link: "mock-address/change-me" },
  { id: 2, name: "Privacy", link: "mock-address/change-me" },
  { id: 3, name: "Terms", link: "mock-address/change-me" },
];

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerHeader}>
        <Container>
          <div className={styles.footerWrap}>
            <address className={styles.footerAddress}>
              <Logo
                className={styles.footerAddressLogo}
                size="max"
                color="#213721"
              />
              <p className={styles.footerAddressTitle}>Opening hours</p>
              <p className={styles.footerAddressTime}>
                Monday to&nbsp;Saturday: 10:30 a.m.&nbsp;to&nbsp;7&nbsp;p.m.
              </p>
              <ul
                className={clsx(styles.footerAddressSocial, styles.socialIcons)}
              >
                <li className={styles.socialIconsItem}>
                  <a
                    className={styles.socialIconsLink}
                    href="mock-address/change-me"
                  >
                    <IconInstagram />
                  </a>
                </li>
                <li className={styles.socialIconsItem}>
                  <a
                    className={styles.socialIconsLink}
                    href="mock-address/change-me"
                  >
                    <IconX />
                  </a>
                </li>
                <li className={styles.socialIconsItem}>
                  <a
                    className={styles.socialIconsLink}
                    href="mock-address/change-me"
                  >
                    <IconFacebook />
                  </a>
                </li>
              </ul>
            </address>
            <nav className={styles.footerNav}>
              {Object.entries(FOOTER_NAV).map(([title, links], index) => (
                <div className={styles.footerNavColumn} key={title + index}>
                  <h3 className={styles.footerNavTitle}>{title}</h3>
                  <ul className={styles.footerNavList}>
                    {links.map((link, index) => (
                      <li className={styles.footerNavItem} key={link + index}>
                        <a
                          className={styles.footerNavLink}
                          href="mock-address/change-me"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
            <div className={styles.footerSide}>
              <a className={styles.footerCredits} href="mock-address/change-me">
                site credits
              </a>
              <span className={styles.footerCopyright}>
                &copy;{new Date().getFullYear()}&nbsp;velvety
              </span>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.footerFooter}>
        <Container className={styles.footerFooterContainer}>
          <p className={styles.footerAuthors}>
            &copy;&nbsp;Designed by&nbsp;
            <a
              className={styles.footerAuthorLink}
              href="mock-address/change-me"
            >
              DhuhaCreative.
            </a>
            &nbsp;Powered by&nbsp;
            <a
              className={styles.footerAuthorLink}
              href="mock-address/change-me"
            >
              UI8.
            </a>
          </p>
          <ul className={styles.footerDocs}>
            {FOOTER_DOCS.map((doc) => (
              <li className={styles.footerDocsItem} key={doc.id}>
                <a href={doc.link} className={styles.footerDocsLink}>
                  {doc.name}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

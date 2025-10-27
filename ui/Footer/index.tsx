import clsx from "clsx";
import styles from "./style.module.scss";
import Logo from "../Logo";
import { IconFacebook, IconInstagram, IconX } from "../Icons";
import Container from "../Container";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <div className={styles.footerHeader}>
          <address className={styles.footerAddress}>
            <Logo className={styles.footerAddressLogo} />
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
          <div className={styles.footerNav}></div>
        </div>
        <div className={styles.footerFooter}></div>
      </Container>
    </footer>
  );
};

export default Footer;

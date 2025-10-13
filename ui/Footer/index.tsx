import clsx from "clsx";
import styles from "./style.module.scss";
import Logo from "../Logo";

interface FooterProps {
  className?: string;
}
const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMenu}>
        <div className={styles.footerColumns}>
          <div className={styles.footerColumn}>
            <Logo></Logo>
          </div>
        </div>
      </div>
      <div className={styles.footerFooter}></div>
    </footer>
  );
};

export default Footer;

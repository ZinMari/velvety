import cl from "clsx";
import styles from "./style.module.scss";

interface BurgerProps {
  isOpen?: boolean;
  className?: string;
}

const Burger: React.FC<BurgerProps> = ({ className, isOpen = false }) => {
  return (
    <button
      className={cl(styles.burger, isOpen && styles.burgerOpen, className)}
    >
      <span className={styles.burgerWrap}>
        <span className={styles.burgerLine}></span>
      </span>
    </button>
  );
};

export default Burger;

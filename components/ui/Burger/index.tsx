import cl from "clsx";
import styles from "./style.module.scss";

interface BurgerProps {
  isOpen?: boolean;
  className?: string;
  onClick?: () => void;
}

const Burger: React.FC<BurgerProps> = ({
  className,
  onClick,
  isOpen = false,
}) => {
  console.log(isOpen);
  return (
    <button
      onClick={onClick}
      className={cl(styles.burger, isOpen && styles.burgerOpen, className)}
    >
      <span className={styles.burgerLine}></span>
    </button>
  );
};

export default Burger;

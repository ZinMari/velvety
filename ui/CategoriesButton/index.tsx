import clsx from "clsx";
import styles from "./styles.module.scss";

interface CategoriesButtonProps {
  className?: string;
  text: string;
}

const CategoriesButton: React.FC<CategoriesButtonProps> = ({
  className,
  text = "Button text",
}) => {
  return (
    <button className={clsx(styles.categoriesButton, className)}>{text}</button>
  );
};

export default CategoriesButton;

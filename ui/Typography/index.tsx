import clsx from "clsx";
import styles from "./style.module.scss";

interface TypographyProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  as: Component = "p",
  children,
  className,
}) => {
  return (
    <Component
      className={clsx(
        styles["typography" + Component.toUpperCase()],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Typography;

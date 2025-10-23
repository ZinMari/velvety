import clsx from "clsx";
import styles from "./style.module.scss";
import { ComponentType } from "react";
import Typography from "../Typography";
import Button from "../Button";

interface ActionCardProps {
  className?: string;
  title: string;
  subtitle: string;
  buttonText: string;
  Icon: ComponentType;
}

const ActionCard: React.FC<ActionCardProps> = ({
  className,
  Icon,
  title,
  subtitle,
  buttonText,
}) => {
  return (
    <article className={styles.actionCard}>
      <Icon />
      <Typography as="h5">
        <span>{subtitle}</span>
        {title}
      </Typography>
      <Button>{buttonText}</Button>
    </article>
  );
};

export default ActionCard;

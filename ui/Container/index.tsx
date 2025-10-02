import { ReactNode } from "react";
import clsx from "clsx";
import styles from './style.module.scss'

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({className, children}) => {
    return (
        <div className={clsx(styles.container, className)}>{children}</div>
    )
}

export default Container;
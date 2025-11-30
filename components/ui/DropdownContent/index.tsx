import React from "react";
import { DropdownContext } from "../Dropdown";
import { TMenuItem } from "../Menu";
import Link from "next/link";

import cl from "clsx";
import styles from "./style.module.scss";

interface DropdownContentProps {
  className?: string;
  children?: TMenuItem[];
}

const DropdownContent: React.FC<DropdownContentProps> = ({
  className,
  children,
}) => {
  const { open, setOpen } = React.useContext(DropdownContext);

  return (
    <div
      className={cl(styles.dropdownContent, open && styles.dropdownContentOpen)}
    >
      <ul className={styles.dropdownContentList}>
        {children?.map(({ id, label, url }) => (
          <li
            onClick={() => setOpen(false)}
            key={id}
            className={styles.dropdownContentItem}
          >
            <Link className={styles.dropdownContentLink} href={url}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownContent;

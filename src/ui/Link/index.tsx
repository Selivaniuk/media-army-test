import classNames from "classnames";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import styles from "./index.module.scss";
type PropsType = {
  type?: "light" | "dark";
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  to: string;
};

const Link: React.FC<PropsType> = ({
  className,
  children,
  icon,
  type = "light",
  to,
}) => {
  const [hovered, setHovered] = useState(false);
  if (!icon) {
    return (
      <RouterLink
        className={classNames([styles.link, styles.noIco, className])}
        to={to}
      >
        {children}
      </RouterLink>
    );
  }
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={classNames([
        styles.container,
        { [styles.hovered]: hovered },
        className,
      ])}
    >
      <span className={classNames([styles.icon, styles[type]])}>{icon}</span>
      <RouterLink className={classNames([styles.link])} to={to}>
        {children}
      </RouterLink>
    </div>
  );
};
export default Link;

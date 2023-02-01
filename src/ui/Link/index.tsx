import classNames from "classnames";
import { Link as RouterLink } from "react-router-dom";
import styles from "./index.module.scss";
type PropsType = {
  type?: "light" | "dark";
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  to: string;
};

const Link: React.FC<PropsType> = ({ children, icon, type = "light", to }) => {
  if (!icon) {
    return (
      <RouterLink className={classNames([styles.link, styles.noIco])} to={to}>
        {children}
      </RouterLink>
    );
  }
  return (
    <div className={classNames([styles.container, styles[type]])}>
      <span className={styles.icon}>{icon}</span>
      <RouterLink className={classNames([styles.link])} to={to}>
        {children}
      </RouterLink>
    </div>
  );
};
export default Link;

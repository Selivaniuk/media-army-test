import styles from "./index.module.scss";
import classNames from "classnames";
import { Icons, Typography } from "ui";

type PropsType = {
  isOpenMenu: boolean;
  setIsOpenMenu: (isOpenMenu: boolean) => void;
};
const Services: React.FC<PropsType> = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <div className={styles.link} onMouseEnter={() => setIsOpenMenu(true)}>
      <Typography.Link>Услуги</Typography.Link>
      <Icons.ChevronDown
        className={classNames([
          styles.arrow,
          { [styles.activeArrow]: isOpenMenu },
        ])}
      />
    </div>
  );
};

export default Services;

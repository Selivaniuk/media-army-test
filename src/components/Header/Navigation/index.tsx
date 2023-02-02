import { Icons } from "ui";
import styles from "./index.module.scss";

type PropsType = {
  isOpenMenu: boolean;
  setIsOpenMenu: (isOpenMenu: boolean) => void;
};

const Navigation: React.FC<PropsType> = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <>
      <span
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={styles.toggleIcon}
      >
        {isOpenMenu ? <Icons.Close /> : <Icons.Menu />}
      </span>
    </>
  );
};
export default Navigation;

import { Header } from "components";
import styles from "./index.module.scss";

type PropsType = {
  children?: React.ReactNode;
};
const Layout: React.FC<PropsType> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>{children}</div>
    </>
  );
};

export default Layout;

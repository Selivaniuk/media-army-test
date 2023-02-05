import { Footer, Header } from "components";
import styles from "./index.module.scss";

type PropsType = {
  children?: React.ReactNode;
};
const Layout: React.FC<PropsType> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

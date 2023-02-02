import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Button } from "ui";
import styles from "./index.module.scss";
import "./animations.scss";

type PropsType = {
  isOpenMenu: boolean;
};
const Registration: React.FC<PropsType> = ({ isOpenMenu }) => {
  const nodeRef = useRef<HTMLButtonElement>(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpenMenu}
      timeout={600}
      classNames="header_navigation_button"
    >
      <Button buttonRef={nodeRef} className={styles.button} size="small">
        Запись на сервис
      </Button>
    </CSSTransition>
  );
};
export default Registration;

import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import RegistrationModal from "components/RegistrationModal";
import { Button } from "ui";
import styles from "./index.module.scss";
import "./animations.scss";

type PropsType = {
  isOpenMenu: boolean;
};

const Registration: React.FC<PropsType> = ({ isOpenMenu }) => {
  const [open, setOpen] = useState(false);

  const nodeRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={isOpenMenu}
        timeout={600}
        classNames="header_navigation_button"
      >
        <Button
          buttonRef={nodeRef}
          className={styles.button}
          size="small"
          onClick={() => setOpen((prev) => !prev)}
        >
          Запись на сервис
        </Button>
      </CSSTransition>
      <RegistrationModal visible={open} onClose={() => setOpen(false)} />
    </>
  );
};
export default Registration;

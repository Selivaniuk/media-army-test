import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./index.module.scss";
import classNames from "classnames";
import { Link } from "ui";
import "./animations.scss";

export const service_links = [
  [
    {
      label: "Ремонт автомобиля",
      href: "repair",
    },
    {
      label: "Плановое ТО",
      href: "inspection",
    },
  ],

  [
    {
      label: "Диагностика и ремонт",
      href: "diagnostics",
    },
    {
      label: "Чип тюнинг",
      href: "tuning",
    },
  ],
];

type PropsType = {
  isOpenMenu: boolean;
  setIsOpenMenu: (isOpenMenu: boolean) => void;
};

const ServicesMenu: React.FC<PropsType> = ({ isOpenMenu, setIsOpenMenu }) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  const menuHeight = isOpenMenu
    ? linksRef.current
      ? linksRef.current.scrollHeight + 80
      : 0
    : 0;

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpenMenu}
      timeout={1200}
      classNames="header_service_menu"
    >
      <div
        className={styles.menu}
        ref={nodeRef}
        style={{ height: menuHeight }}
        onMouseEnter={() => setIsOpenMenu(true)}
        onMouseLeave={() => setIsOpenMenu(false)}
      >
        <div
          ref={linksRef}
          className={classNames([styles.links, "header_service_links"])}
        >
          {service_links.map((linkBlock) =>
            linkBlock.map((link) => (
              <Link
                className={styles.link}
                key={link.href}
                to={link.href}
                children={link.label}
              />
            ))
          )}
        </div>
      </div>
    </CSSTransition>
  );
};

export default ServicesMenu;

import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./index.module.scss";
import classNames from "classnames";
import { Icons, Link, Typography } from "ui";
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
const Services: React.FC<PropsType> = ({ isOpenMenu, setIsOpenMenu }) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className={styles.link} onMouseEnter={() => setIsOpenMenu(true)}>
        <Typography.Link>Услуги</Typography.Link>
        <Icons.ChevronDown
          className={classNames([
            styles.arrow,
            { [styles.activeArrow]: isOpenMenu },
          ])}
        />
      </div>
      <CSSTransition
        nodeRef={nodeRef}
        in={isOpenMenu}
        timeout={600}
        classNames="header_service_menu"
      >
        <div className={styles.menu} ref={nodeRef}>
          <div className={styles.links}>
            {service_links.map((linkBlock) =>
              linkBlock.map((link) => (
                <Link
                  className={styles.menu_link}
                  key={link.href}
                  to={link.href}
                  children={link.label}
                />
              ))
            )}
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Services;

import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import { Button, Icons, Link } from "ui";
import useWindowDimensions from "hooks/useWindowDimensions";
import { header_links } from "../index";
import { service_links } from "../Services";
import styles from "./index.module.scss";
import "./animations.scss";

type PropsType = {
  visible: boolean;
};

const center_links = [
  {
    label: "Автосервис VOLVO",
    href: "volvo",
  },
  {
    label: "Автосервис Land Rover",
    href: "land_rover",
  },
  {
    label: "Автосервис VAG",
    href: "vag",
  },
  {
    label: "Автосервис Mercedes",
    href: "mercedes",
  },
  {
    label: "Кузовной ремонт и детейлинг",
    href: "detailing",
  },
];
const NavigationMenu: React.FC<PropsType> = ({ visible }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();

  //   useEffect(() => {
  //     if (
  //       menuRef.current &&
  //       width < 1350 &&
  //       height > (menuRef.current.scrollHeight - 40 + menuPadding * 2) * 2
  //     ) {
  //       document.body.style.overflow = visible ? "hidden" : "visible";
  //     }
  //   }, [visible]);
  return (
    <CSSTransition
      nodeRef={menuRef}
      in={visible}
      timeout={600}
      classNames="header_navigation_menu"
    >
      <div
        ref={menuRef}
        className={classNames([
          styles.menuContainer,
          { [styles.visibleMenu]: visible },
        ])}
      >
        <div className={styles.menu}>
          <div className={styles.headerLinks}>
            {header_links.map((linkBlock, i) => (
              <div className={styles.linkBlock} key={"header_links" + i}>
                {linkBlock.map((link) => (
                  <span className={styles.link} key={link.href}>
                    <Link to={link.href} children={link.label} />
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className={classNames([styles.menuBlock, styles.service])}>
            <p className={styles.title}>Услуги</p>
            <div className={styles.serviceLinks}>
              {service_links.map((linkBlock, i) => (
                <div className={styles.linkBlock} key={"service_links" + i}>
                  {linkBlock.map((link) => (
                    <span className={styles.link} key={link.href}>
                      <Link to={link.href} children={link.label} />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.desktop}>
            <div className={styles.right}>
              <div className={styles.menuBlock}>
                <p className={styles.title}>Автоцентры</p>
                <div className={styles.centersLinks}>
                  {center_links.map((link) => (
                    <span className={styles.link} key={link.href}>
                      <Link to={link.href} children={link.label} />
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.personalArea}>
                <Link to="#">Личный кабинет</Link>
                <Icons.ArrowUpRight />
              </div>
            </div>
            <div className={styles.left}>
              <div className={styles.contacts}>
                <p className={styles.number}>+7 (999) 123-45-67</p>
                <p className={styles.mail}>info@example.ru</p>
                <span className={styles.placeholder}>
                  <p>Работаем для вас:</p>
                  <p>Ежедневно с 9:00 до 21:00</p>
                </span>
              </div>
              <div className={styles.bottom}>
                <div className={styles.addresses}>
                  <div className={styles.address}>
                    <p className={styles.address_title}>АДРЕС АВТОЦЕНТРА:</p>
                    <p className={styles.placeholder}>
                      Екатеринбург, ул. Московский тракт 7 км, 2 +7 (999)
                      123-45-67
                    </p>
                  </div>

                  <div className={styles.address}>
                    <p className={styles.address_title}>
                      ЦЕНТР КУЗОВНОГО РЕМОНТА:
                    </p>
                    <p className={styles.placeholder}>
                      Екатеринбург, ул. Московский тракт 7 км, 2 +7 (999)
                      123-45-67
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.extraSpace}>
            <div className={styles.social}>
              <Button
                size={width > 1350 ? "large" : "small"}
                type="outline-dark"
                icon={<Icons.VK />}
              />
              <Button
                size={width > 1350 ? "large" : "small"}
                type="outline-dark"
                icon={<Icons.Instagram />}
              />
              <Button
                size={width > 1350 ? "large" : "small"}
                type="outline-dark"
                icon={<Icons.Twitter />}
              />
              <Button
                size={width > 1350 ? "large" : "small"}
                type="outline-dark"
                icon={<Icons.Youtube />}
              />
            </div>
            <div>
              <Link to="#" className={styles.privacyPolicy}>
                Условия конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
export default NavigationMenu;

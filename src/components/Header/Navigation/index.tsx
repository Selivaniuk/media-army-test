import { CSSTransition } from "react-transition-group";
import styles from "./index.module.scss";
import { Button, Icons, Link } from "ui";
import { useRef, useState } from "react";
import { header_links } from "../index";
import { service_links } from "../Services";
import classNames from "classnames";
import "./animations.scss";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef<HTMLButtonElement>(null);
  console.log("nodeRef", nodeRef);
  //   const { width } = useWindowDimensions();

  return (
    <>
      <span onClick={() => setIsOpen(!isOpen)} className={styles.toggleIcon}>
        {isOpen ? <Icons.Close /> : <Icons.Menu />}
      </span>
      <CSSTransition
        nodeRef={nodeRef}
        in={isOpen}
        timeout={600}
        classNames="header_navigation_button"
      >
        <Button buttonRef={nodeRef} className={styles.button} size="small">
          Запись на сервис
        </Button>
      </CSSTransition>

      <div className={styles.menu}>
        <div className={styles.headerLinks}>
          {header_links.map((link) => (
            <Link
              className={styles.link}
              key={link.href}
              to={link.href}
              children={link.label}
            />
          ))}
        </div>
        <div className={styles.serviceLinks}>
          <p className={styles.title}>Услуги</p>
          {service_links.map((link) => (
            <Link
              className={styles.link}
              key={link.href}
              to={link.href}
              children={link.label}
            />
          ))}
        </div>
        <div className={styles.serviceLinks}>
          <p className={styles.title}>Автоцентры</p>
          {service_links.map((link) => (
            <Link
              className={styles.link}
              key={link.href}
              to={link.href}
              children={link.label}
            />
          ))}
        </div>
        <div className={styles.personalArea}>
          <p>Личный кабинет</p>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contacts_mainInfo}>
            <p className={styles.number}>+7 (999) 123-45-67</p>
            <div className={styles.infoBlock}>
              <p className={styles.infoBlock_title}>info@example.ru</p>
              <span className={styles.infoBlock_info}>
                <p>Работаем для вас:</p>
                <p>Ежедневно с 9:00 до 21:00</p>
              </span>
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.infoBlock}>
              <p className={styles.infoBlock_title}>АДРЕС АВТОЦЕНТРА:</p>
              <span className={styles.infoBlock_info}>
                <p>
                  Екатеринбург, ул. Московский тракт 7 км, 2 +7 (999) 123-45-67
                </p>
              </span>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.infoBlock_title}>ЦЕНТР КУЗОВНОГО РЕМОНТА:</p>
              <span className={styles.infoBlock_info}>
                <p>
                  Екатеринбург, ул. Московский тракт 7 км, 2 +7 (999) 123-45-67
                </p>
              </span>
            </div>
          </div>
          <div className={styles.social}>
            <Button type="outline" icon={<Icons.VK />} />
            <Button type="outline" icon={<Icons.Instagram />} />
            <Button type="outline" icon={<Icons.Twitter />} />
            <Button type="outline" icon={<Icons.Youtube />} />
          </div>
        </div>
        <Link to="#">Условия конфиденциальности</Link>
      </div>
    </>
  );
};
export default Navigation;

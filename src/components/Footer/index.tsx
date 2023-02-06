import classNames from "classnames";
import FeedbackModal from "components/FeedbackModal";
import { header_links } from "components/Header";
import { center_links } from "components/Header/NavigationMenu";
import { service_links } from "components/Header/ServicesMenu";
import useWindowDimensions from "hooks/useWindowDimensions";
import { useState } from "react";
import { Button, Icons, Link } from "ui";
import styles from "./index.module.scss";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();
  return (
    <>
      <footer className={styles.container}>
        <div className={styles.desktop_top}>
          <div className={styles.desktop_left}>
            <div className={styles.communication}>
              <div className={styles.contacts}>
                <p className={styles.mail}>info@avtoligaekb.ru</p>
                <p className={styles.time}>
                  Работаем для вас:
                  <br />
                  Ежедневно с 9:00 до 21:00
                </p>
              </div>
              <div className={styles.buttons}>
                <Button
                  onClick={() => setOpen(true)}
                  type="filled-light"
                  className={styles.button}
                >
                  Обратный звонок
                </Button>
                <Button
                  type="outline"
                  className={classNames([styles.outlineButton, styles.button])}
                >
                  Контроль качества
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.desktop_right}>
            <div className={styles.right_top}>
              <div className={styles.header_links}>
                {header_links.map((linkBlock, i) =>
                  linkBlock.map((link) => (
                    <span className={styles.link} key={link.href}>
                      <Link to={link.href} children={link.label} />
                    </span>
                  ))
                )}
              </div>
              <div className={styles.personalArea}>
                <Link to="#">Личный кабинет</Link>
                <Icons.ArrowUpRight />
              </div>
            </div>
            <div className={styles.menu}>
              <div className={styles.menuBlock}>
                <p className={styles.title}>Автоцентры</p>
                <div className={styles.menuLinks}>
                  {center_links.map((link) => (
                    <span className={styles.link} key={link.href}>
                      <Link to={link.href} children={link.label} />
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.menuBlock}>
                <p className={styles.title}>Услуги</p>
                <div className={styles.menuLinks}>
                  {service_links.map((linkBlock, i) =>
                    linkBlock.map((link) => (
                      <span className={styles.link} key={link.href}>
                        <Link to={link.href} children={link.label} />
                      </span>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.desktop_bottom}>
          <div className={styles.social}>
            <Button
              size={width > 1350 ? "large" : "small"}
              type="outline-light"
              icon={<Icons.VK />}
            />
            <Button
              size={width > 1350 ? "large" : "small"}
              type="outline-light"
              icon={<Icons.Instagram />}
            />
            <Button
              size={width > 1350 ? "large" : "small"}
              type="outline-light"
              icon={<Icons.Twitter />}
            />
            <Button
              size={width > 1350 ? "large" : "small"}
              type="outline-light"
              icon={<Icons.Youtube />}
            />
          </div>
          <div className={styles.addresses}>
            <div className={styles.address}>
              <p className={styles.address_title}>АДРЕС АВТОЦЕНТРА:</p>
              <p className={styles.placeholder}>
                Екатеринбург, ул. Московский тракт 7 км, 2<br /> +7 (999)
                123-45-67
              </p>
            </div>

            <div className={styles.address}>
              <p className={styles.address_title}>ЦЕНТР КУЗОВНОГО РЕМОНТА:</p>
              <p className={styles.placeholder}>
                Екатеринбург, ул. Московский тракт 7 км, 2<br /> +7 (999)
                123-45-67
              </p>
            </div>
          </div>
        </div>
        <div className={styles.companyInfo}>
          <p className={styles.placeholder}>
            © 2022. {width > 500 ? "Специализированный" : "Спец."} автоцентр
          </p>
          <span className={styles.design}>
            {width > 500 ? "Дизайн и разработка" : "Сайт от"} -{" "}
            <Link to="#">Media Army</Link>
          </span>
        </div>
      </footer>
      <FeedbackModal visible={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Footer;

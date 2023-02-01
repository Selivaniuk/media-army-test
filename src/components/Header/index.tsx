import useWindowDimensions from "hooks/useWindowDimensions";
import { useRef, useState } from "react";
import { Button, Icons, Link, Typography } from "ui";
import styles from "./index.module.scss";
import classNames from "classnames";
import Services from "./Services";
import Navigation from "./Navigation";

export const header_links = [
  {
    label: "О компании",
    href: "about",
  },
  {
    label: "Гарантии",
    href: "guarantees",
  },
  {
    label: "Новости ",
    href: "news",
  },
  {
    label: "Акции",
    href: "promotions",
  },
  {
    label: "Контакты",
    href: "contacts",
  },
];

const Header = () => {
  const { width } = useWindowDimensions();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header
      className={classNames([
        styles.header,
        { [styles.isOpenMenu]: isOpenMenu },
      ])}
      onMouseLeave={() => setIsOpenMenu(false)}
    >
      <div className={styles.headerLayout}>
        {width > 450 ? (
          <Icons.LogoLarge className={styles.logo} />
        ) : (
          <Icons.LogoSmall />
        )}
        <div className={styles.right}>
          <div className={styles.links}>
            <Services isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
            {header_links.map((link) => (
              <Link
                className={styles.link}
                key={link.href}
                to={link.href}
                children={link.label}
              />
            ))}
          </div>
          <hr className={styles.separator} />
          <Navigation />
        </div>
      </div>
    </header>
  );
};
export default Header;

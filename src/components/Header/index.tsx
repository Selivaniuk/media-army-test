import useWindowDimensions from "hooks/useWindowDimensions";
import { useState } from "react";
import { Icons, Link } from "ui";
import styles from "./index.module.scss";
import classNames from "classnames";
import Services from "./Services";
import Navigation from "./Navigation";
import NavigationMenu from "./NavigationMenu";
import Registration from "./Registration";

export const header_links = [
  [
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
  ],
  [
    {
      label: "Акции",
      href: "promotions",
    },
    {
      label: "Контакты",
      href: "contacts",
    },
  ],
];

const Header = () => {
  const { width } = useWindowDimensions();
  const [isOpenServicesMenu, setIsOpenServicesMenu] = useState(false);
  const [isOpenNavigationMenu, setIsOpenNavigationMenu] = useState(false);

  return (
    <>
      <header
        className={classNames([
          styles.header,
          {
            [styles.isOpenMenu]: isOpenServicesMenu || isOpenNavigationMenu,
          },
        ])}
        onMouseLeave={() => setIsOpenServicesMenu(false)}
      >
        <div className={styles.headerLayout}>
          {width > 450 ? (
            <Icons.LogoLarge className={styles.logo} />
          ) : (
            <Icons.LogoSmall />
          )}
          <div className={styles.right}>
            <div className={styles.links}>
              <Services
                isOpenMenu={isOpenServicesMenu}
                setIsOpenMenu={setIsOpenServicesMenu}
              />
              {header_links.map((linkBlock) =>
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
            <hr className={styles.separator} />
            <Navigation
              isOpenMenu={isOpenNavigationMenu}
              setIsOpenMenu={setIsOpenNavigationMenu}
            />
          </div>
        </div>
      </header>
      <Registration isOpenMenu={isOpenNavigationMenu} />
      <NavigationMenu visible={isOpenNavigationMenu} />
    </>
  );
};
export default Header;

import useWindowDimensions from "hooks/useWindowDimensions";
import { useState } from "react";
import { Icons, Link } from "ui";
import styles from "./index.module.scss";
import classNames from "classnames";
import Services from "./Services";
import Navigation from "./Navigation";
import NavigationMenu from "./NavigationMenu";
import Registration from "./Registration";
import ServicesMenu from "./ServicesMenu";

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
  const [isHoverServicesMenu, setIsHoverServicesMenu] = useState({
    isHeaderHover: false,
    isMenuHover: false,
  });
  const [isOpenNavigationMenu, setIsOpenNavigationMenu] = useState(false);

  const isOpenServicesMenu =
    isHoverServicesMenu.isHeaderHover || isHoverServicesMenu.isMenuHover;
  return (
    <>
      <header
        className={classNames([
          styles.header,
          {
            [styles.isOpenMenu]: isOpenServicesMenu || isOpenNavigationMenu,
          },
        ])}
        onMouseLeave={() =>
          setIsHoverServicesMenu((prev) => ({ ...prev, isHeaderHover: false }))
        }
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
                setIsOpenMenu={(e) =>
                  setIsHoverServicesMenu((prev) => ({
                    ...prev,
                    isHeaderHover: e,
                  }))
                }
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
      <ServicesMenu
        isOpenMenu={isOpenServicesMenu}
        setIsOpenMenu={(e) =>
          setIsHoverServicesMenu((prev) => ({
            ...prev,
            isMenuHover: e,
          }))
        }
      />
      <NavigationMenu visible={isOpenNavigationMenu} />
    </>
  );
};
export default Header;

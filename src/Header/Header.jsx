import style from "./Header.module.scss";
import React, { useState, useEffect } from "react";
import { Navigation } from "./../constants/Navigation";
import cx from "classnames";
import { useWindowSize } from "./../hooks/useWindowSize";
export const Header = () => {
  const nav = Object.values(Navigation);

  const { width } = useWindowSize();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(width > 768);
    const threshold = document.getElementById("about").offsetTop;
    const onScroll = () => {
      setIsScrolled(window.scrollY >= threshold);
    };

    window.addEventListener("scroll", onScroll);
    return;
  }, [width]);

  const onMenuToggle = () => {
    if (width <= 768) setIsMenuOpen(!isMenuOpen);
  };

  const onMenuClose = () => {
    if (width <= 768) setIsMenuOpen(false);
  };

  return (
    <header className={isScrolled ? style.scrolled : style.header}>
      <div className="logo"></div>
      <nav>
        <span
          className={cx("material-symbols-outlined", style.menuCollapsedIcon)}
          onClick={onMenuToggle}
        >
          menu
        </span>
        {isMenuOpen && (
          <ul className={style.menuBox}>
            {nav.map(({ href, name }) => {
              return (
                <li
                  key={href}
                  className={cx(style.menuElement, "pompiere-font")}
                >
                  <a href={href} onClick={onMenuClose}>
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
};

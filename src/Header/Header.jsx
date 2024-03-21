import style from "./Header.module.scss";
import React, { useState, useEffect } from "react";
import { Navigation } from "./../constants/Navigation";
import cx from "classnames";
export const Header = () => {
  const nav = Object.values(Navigation);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const threshold = document.getElementById("about").offsetTop;
    const onScroll = () => {
      // Set state based on scroll position
      setIsScrolled(window.scrollY > threshold);
    };

    // Attach scroll event listener to window
    window.addEventListener("scroll", onScroll);

    // Clean up by removing the event listener
    // return () => window.removeEventListener("scroll", onScroll);
    return;
  }, []);

  return (
    <header className={isScrolled ? style.scrolled : style.header}>
      <div className="logo"></div>
      <nav>
        <ul className={style.menuBox}>
          {nav.map(({ href, name }) => {
            return (
              <li key={href} className={cx(style.menuElement, "pompiere-font")}>
                <a href={href}>{name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

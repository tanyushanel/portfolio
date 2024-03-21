import style from "./Header.module.scss";
import { Navigation } from "./../constants/Navigation";
import cx from "classnames";
export const Header = () => {
  const nav = Object.values(Navigation);
  return (
    <header className={style.header}>
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

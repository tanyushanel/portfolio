import styles from "./Header.module.scss";
import style from "./Header.module.scss";
import { Navigation } from "./../constants/Navigation";
export const Header = () => {
  const nav = Object.values(Navigation);
  return (
    <header className={style.header}>
      <div className="logo"></div>
      <nav>
        <ul className={styles.menuBox}>
          {nav.map(({ href, name }) => {
            return (
              <li className="menu-element pompiere-font">
                <a href={href}>{name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

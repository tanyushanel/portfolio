import style from "./Footer.module.scss";
import cx from "classnames";
import { SocialBox } from "./../components/Social/SocialBox";

export const Footer = () => {
  return (
    <footer className={cx("pompiere-font", style.footer)}>
      <span className={style.copyright}>2024 © Tatyana Nelipovich</span>
      <SocialBox />
    </footer>
  );
};

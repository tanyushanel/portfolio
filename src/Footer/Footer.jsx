import { SocialBox } from "../Social/SocialBox";
import style from "./Footer.module.scss";
import cx from "classnames";

export const Footer = () => {
  return (
    <footer className={cx("pompiere-font", style.footer)}>
      <span>2024 © Tatyana Nelipovich</span>
      <SocialBox />
    </footer>
  );
};

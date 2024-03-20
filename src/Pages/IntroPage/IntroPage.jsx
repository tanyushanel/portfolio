import { SocialBox } from "../../Social/SocialBox";
import style from "./IntroPage.module.scss";
import cx from "classnames";

export const IntroPage = () => {
  return (
    <article className={style.introArticle} id="intro">
      <section className={style.helloSection}>
        <h2 className="pompiere-font">Hello & Welcome</h2>
        <h1 className="truculenta-font">
          I'm Tatsiana Nelipovich
          <br /> &lt; Frontend Developer &gt;
        </h1>
        <SocialBox />
        <button
          className={cx(
            "button-transparent",
            "truculenta-font",
            style.buttonDownload
          )}
        >
          Download CV
        </button>
        <a href="#about">
          <span
            className={cx(
              "material-symbols-outlined",
              "button-transparent",
              style.nextLink
            )}
          >
            keyboard_double_arrow_down
          </span>
        </a>
      </section>
    </article>
  );
};

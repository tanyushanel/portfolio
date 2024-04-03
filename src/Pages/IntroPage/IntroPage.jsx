import style from "./IntroPage.module.scss";
import cx from "classnames";
import pdf from "../../assets/Tatyana Nelipovich_cv.pdf";
import { SocialBox } from "./../../components/Social/SocialBox";
import { useState, useEffect } from "react";

export const IntroPage = () => {
  const [isJumping, setIsJumping] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <article className={style.introArticle} id="intro">
      <section className={style.helloSection}>
        <h2 className="pompiere-font">Hello & Welcome</h2>
        <h1 className="truculenta-font">
          I'm Tatsiana Nelipovich
          <br /> &lt; Frontend Developer &gt;
        </h1>
        <SocialBox />
        <a
          href={pdf}
          className={cx(
            "button-transparent",
            "truculenta-font",
            style.buttonDownload
          )}
        >
          Download CV
        </a>
        <a href="#about">
          <span
            className={cx(
              "material-symbols-outlined",
              "button-transparent",
              style.nextLink,
              isJumping ? style.jump : ""
            )}
          >
            keyboard_double_arrow_down
          </span>
        </a>
      </section>
    </article>
  );
};

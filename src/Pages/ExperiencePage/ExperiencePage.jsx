import style from "./ExperiencePage.module.scss";
import cx from "classnames";
export const ExperiencePage = () => {
  return (
    <article className={style.articleExp} id="experience">
      <section className={style.hireMe}>
        <h2>&lt; I'm available for Freelance &gt;</h2>
        <a
          href="#contacts"
          className={cx("button-transparent", "truculenta-font")}
        >
          Hire Me!
        </a>
      </section>
    </article>
  );
};

import style from "./Aboutme.module.scss";

import cx from "classnames";
export const AboutmePage = () => {
  return (
    <article className="article-about" id="about">
      <h2 className="art-heading">About Me</h2>
      <h3 className="truculenta-font">Hello, I'm Tatsiana Nelipovich</h3>
      <h5>Frontend Developer</h5>
      <section className="section-content">
        Frontend development captivates me the most. I'm dedicated to enhancing
        my skills in this area and take pleasure in the outcomes of my efforts.
        Exploring and implementing new technologies is something I find
        particularly rewarding.
      </section>
      <ul>
        <li>
          <p className={style.techItem}>
            <b>Javascript</b>
            <span>Intermediate</span>
          </p>
          <p className={cx(style.borderIntermed, style.scale)}></p>
        </li>
        <li>
          <p className={style.techItem}>
            <b>Typescript</b>
            <span>Intermediate</span>
          </p>
          <p className={cx(style.borderIntermed, style.scale)}></p>
        </li>
        <li>
          <p className={style.techItem}>
            <b>Angular</b>
            <span>Intermediate</span>
          </p>
          <p className={cx(style.borderIntermed, style.scale)}></p>
        </li>
        <li>
          <p className={style.techItem}>
            <b>HTML</b>
            <span>Advanced</span>
          </p>
          <p className={cx(style.borderAdv, style.scale)}></p>
        </li>
        <li>
          <p className={style.techItem}>
            <b>CSS</b>
            <span>Advanced</span>
          </p>
          <p className={cx(style.borderAdv, style.scale)}></p>
        </li>
        <li>
          <p className={style.techItem}>
            <b>RxJS</b>
            <span>Advanced Beginner</span>
          </p>
          <p className={cx(style.borderAdvBeg, style.scale)}></p>
        </li>
        <li>
          <p className={style.techItem}>
            <b>ReactJs</b>
            <span>Beginner</span>
          </p>
          <p className={cx(style.borderBeg, style.scale)}></p>
        </li>
        <li>
          <p className={style.techItem}>
            <b>Express.js</b>
            <span>Beginner</span>
          </p>
          <p className={cx(style.borderBeg, style.scale)}></p>
        </li>
        <li>
          <p className={style.techItem}>
            <b>Redux</b>
            <span>Beginner</span>
          </p>
          <p className={cx(style.borderBeg, style.scale)}></p>
        </li>
        <li>
          <p className={style.techItem}>
            <b>NgRx</b>
            <span>Beginner</span>
          </p>
          <p className={cx(style.borderBeg, style.scale)}></p>
        </li>
      </ul>
    </article>
  );
};

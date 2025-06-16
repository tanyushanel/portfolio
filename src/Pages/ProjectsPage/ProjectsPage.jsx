import style from "./ProjectPage.module.scss";

export const ProjectsPage = () => {
  return (
    <article className="article-projects" id="projects">
      <h2>My Projects</h2>
      <ul className={style.grid}>
        <li className={style.gridItem}></li>
      </ul>
    </article>
  );
};

import resource from "../../assets/images/projects/resource.png";
import style from "./ProjectPage.module.scss";

export const ProjectsPage = () => {
  return (
    <article className="article-projects" id="projects">
      <h2>My Projects</h2>
      <ul>
        <li className={style.gridItem}>
          <a href="https://tanyushanel.github.io/coffee-shop-react">
            <img src={resource} alt="source" />
          </a>
        </li>
      </ul>
    </article>
  );
};

import style from "./ServicesPage.module.scss";
export const ServicesPage = () => {
  return (
    <article className="article-services" id="services">
      <h2 className="art-heading">My Services</h2>
      <ul className={style.serviceList}>
        <li className={style.serviceItem}>
          <span class="material-symbols-outlined">view_quilt</span>
          <h4>Exact Design</h4>
          <p>
            I focus on accurately converting and keeping the original design
            from Figma when coding, with very few changes.
          </p>
        </li>
        <li className={style.serviceItem}>
          <span class="material-symbols-outlined">devices</span>
          <h4>Responsive Layout</h4>
          <p>
            Creating mobile-friendly websites is a top priority for me, ensuring
            they appear great on smartphones and tablets too.
          </p>
        </li>
        <li className={style.serviceItem}>
          <span class="material-symbols-outlined">edit_note</span>
          <h4>Easy To Customize</h4>
          <p>
            I write code with clear annotations and straightforward logic to
            facilitate easy updates and alterations by others.
          </p>
        </li>
      </ul>
    </article>
  );
};

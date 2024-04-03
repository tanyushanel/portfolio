import style from "./ContactPage.module.scss";
export const ContactPage = () => {
  return (
    <article className="article-get-touch " id="contacts">
      <h2 className="art-heading">Get In Touch</h2>
      <div className={style.contactItem}>
        <span className="material-symbols-outlined"> mail </span>
        <h4>Email Me At</h4>
        <a href="mailto:tatyana.nelipovich@gmail.com" className="pompiere-font">
          tatyana.nelipovich@gmail.com
        </a>
      </div>
    </article>
  );
};

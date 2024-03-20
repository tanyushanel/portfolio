import styles from "./SocialLink.module.scss";

export const SocialLink = ({ social }) => {
  return (
    <li className={styles.socialLink}>
      <a href={social.href}>
        <img
          src={social.img}
          title="social"
          aria-label="o"
          aria-labelledby="o"
        />
      </a>
    </li>
  );
};

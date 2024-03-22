import { SocialLink } from "./SocialLink/SocialLink";
import { Socials } from "../../constants/Socials.js";
import styles from "./SocialBox.module.scss";

export const SocialBox = () => {
  const socials = Object.values(Socials).map((socialLink) => {
    return <SocialLink key={socialLink} social={socialLink} />;
  });

  return <ul className={styles.socialBox}>{socials}</ul>;
};

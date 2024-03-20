import { SocialLink } from "./SocialLink/SocialLink";
import { Socials } from "../constants/Socials";
import styles from "./SocialBox.module.scss";

export const SocialBox = () => {
  const socials = Object.values(Socials).map((socialLink, ind) => {
    return <SocialLink key={ind} social={socialLink} />;
  });

  return <ul className={styles.socialBox}>{socials}</ul>;
};

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import styles from "./socialicons.module.scss";

function socialIcon(icon, color) {
  if (icon === "fb") {
    return <FontAwesomeIcon icon={faFacebook} color={color} />;
  } else if (icon === "twitter") {
    return <FontAwesomeIcon icon={faTwitter} color={color} />;
  } else if (icon === "linkedin") {
    return <FontAwesomeIcon icon={faLinkedin} color={color} />;
  } else if (icon === "github") {
    return <FontAwesomeIcon icon={faGithub} color={color} />;
  } else {
    return null;
  }
}

const SocialIcons = props => {
  return (
    <ul className={styles.socialIcon}>
      {props.social.map(({ url, icon }, index) => (
        <li key={index}>
          <a href={url}>{socialIcon(icon, props.color)}</a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;


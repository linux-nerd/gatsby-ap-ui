import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
  faBloggerB,
  faDev,
  faStackOverflow
} from "@fortawesome/free-brands-svg-icons";

import styles from "./socialicons.module.scss";

function socialIcon(icon, color) {
  if (icon === "fb") {
    return <FontAwesomeIcon size="lg" icon={faFacebook} color={color} />;
  } else if (icon === "twitter") {
    return <FontAwesomeIcon size="lg" icon={faTwitter} color={color} />;
  } else if (icon === "linkedin") {
    return <FontAwesomeIcon size="lg" icon={faLinkedin} color={color} />;
  } else if (icon === "github") {
    return <FontAwesomeIcon size="lg" icon={faGithub} color={color} />;
  } else if (icon === "blog") {
    return <FontAwesomeIcon size="lg" icon={faBloggerB} color={color} />;
  } else if (icon === "dev") {
    return <FontAwesomeIcon size="lg" icon={faDev} color={color} />;
  } else if (icon === "stackoverflow") {
    return <FontAwesomeIcon size="lg" icon={faStackOverflow} color={color} />;
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

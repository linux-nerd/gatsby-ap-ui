import React from "react";
import ProfileIntro from "../profile-intro/ProfileIntro";
import ProfileImage from "../profile-image/ProfileImage";
import SocialIcons from "../social-icons/SocialIcons";

import styles from "./layout.module.scss";
const Layout = ({ social, children }) => {
  return (
    <div className={styles.layout}>
      <div>
        <header>
          <ProfileIntro>
            <SocialIcons social={social} color="white" />
          </ProfileIntro>
          <ProfileImage />
        </header>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;

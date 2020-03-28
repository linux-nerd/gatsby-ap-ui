import React from "react";
import styles from "./profileintro.module.scss";

const ProfileIntro = ({ children }) => {
  return (
    <div className={styles.root}>
      <h1>Hi, I'm Abhishek Prakash</h1>
      <p>Web Specialist</p>
      <p>@PayPal SE</p>
      {children}
    </div>
  );
};

export default ProfileIntro;

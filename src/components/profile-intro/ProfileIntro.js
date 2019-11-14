import React from "react";
import styles from "./profileintro.module.scss";

const ProfileIntro = ({ children }) => {
  return (
    <div className={styles.root}>
      <h1>Hi, I'm Abhishek Prakash</h1>
      <p>Senior Web Developer</p>
      <p>iZettle, a PayPal service</p>
      {children}
    </div>
  );
};

export default ProfileIntro;

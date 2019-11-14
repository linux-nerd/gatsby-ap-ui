import React from "react";
import styles from "./sectionwrapper.module.scss";

const SectionWrapper = ({ darkBg = false, children }) => {
  const classNames = `${styles.root} ${darkBg ? styles.darkBg : ""}`;
  console.log(classNames);
  return <section className={classNames}>{children}</section>;
};

export default SectionWrapper;

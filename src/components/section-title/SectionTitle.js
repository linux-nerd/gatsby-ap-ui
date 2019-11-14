import React from "react";
import styles from "./sectiontitle.module.scss";

const SectionTitle = ({ title }) => {
  return (
    <div className={styles.sectionTitle}>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;

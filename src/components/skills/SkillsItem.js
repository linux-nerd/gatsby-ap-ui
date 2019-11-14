import React from "react";
import styles from "./skillsitem.module.scss";
const SkillsItem = ({ title, rating }) => {
  return (
    <div className={styles.progressitem}>
      <span className={styles.progresstitle}>{title}</span>

      <div className={styles.progress}>
        <div
          className={styles.progressbar}
          role="progressbar"
          aria-valuenow={rating}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${rating}%` }}
        >
          <span
            className={styles.progresspercent}
            style={{ left: `${rating}%` }}
          >
            {" "}
            {rating}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;

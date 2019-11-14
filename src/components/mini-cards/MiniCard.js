import React from "react";
import styles from "./minicard.module.scss";
const MiniCard = ({ from, to, title, company, country, city }) => {
  return (
    <div className={styles.contentitem}>
      <small>
        {from} - {to}
      </small>
      <h3>{title}</h3>
      <h4>{company}</h4>

      <p>
        {country}, {city}
      </p>
    </div>
  );
};

export default MiniCard;

import React from "react";
import styles from "./DashboardElementHeader.module.scss";

export default function({title,info = undefined}) {
  return (
    <div>
        <h2>{title} {info !== undefined ? <span className={styles.focus}>{info}</span> : ""}</h2>
    </div>
  );
}

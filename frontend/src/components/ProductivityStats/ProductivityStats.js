import React from "react";
import styles from "./ProductivityStats.module.scss";
import DashboardElementHeader from "../DashboardElementHeader/DashboardElementHeader";
import IndexGraph from "./IndexGraph/IndexGraph";

export default function() {
  return (
    <div className={styles.ProductivityStats}>

        <div className={styles.title}>
          <DashboardElementHeader title="Meeting productivity" info="high"/>
        </div>

        <div className={styles.main}>
          <div className={styles.indexStat}>
            <IndexGraph />
            <p>Meeting Productivity Index</p>
          </div>

        </div>

        <div className={styles.info}>
          <div className={styles.iconStat} id="meeting-type">
            <h4>Current Meeting Type:</h4>
            <p>Collegial</p>
          </div>
        </div>

        <div className={styles.trends}>
        <DashboardElementHeader title="Trends" info=""/>
        </div>
        
    </div>
  );
}

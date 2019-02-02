import React from "react";
import styles from "./ProductivityStats.module.scss";
import DashboardElementHeader from "../DashboardElementHeader/DashboardElementHeader";
import IndexGraph from "./IndexGraph/IndexGraph";
import iconMeetingAmicable from '../../assets/svg/icon-meeting-amicable.svg';
import iconMeetingIntense from '../../assets/svg/icon-meeting-intense.svg';
import iconMeetingFormal from '../../assets/svg/icon-meeting-formal.svg';


export default function({index}) {
  return (
    <div className={styles.ProductivityStats}>

        <div className={styles.title}>
          <DashboardElementHeader title="Meeting productivity" info="high"/>
        </div>

        <div className={styles.main}>
          <div className={styles.indexStat}>
            <IndexGraph index={index}/>
            <p>Meeting Productivity Index</p>
          </div>

        </div>

        <div className={styles.info}>
          <div className={styles.iconStat} id="meeting-type">
            <img src={iconMeetingAmicable} alt="iconMeetingAmicable" />
            <div className={styles.label}>
              <h4>Current Meeting Type:</h4>
              <p>Collegial</p>
            </div>
            
          </div>
        </div>

        <div className={styles.trends}>
        <DashboardElementHeader title="Trends"/>
        </div>
        
    </div>
  );
}

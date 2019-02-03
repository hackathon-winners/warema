import React, { Fragment } from "react";
import styles from "./ProductivityStats.module.scss";
import DashboardElementHeader from "../DashboardElementHeader/DashboardElementHeader";
import ActivityGraph from "../ActivityGraph/ActivityGraph";
import IndexGraph from "./IndexGraph/IndexGraph";
import iconMeetingEngaged from "../../assets/svg/icon-meeting-engaged.svg";
import iconMeetingFormal from "../../assets/svg/icon-meeting-formal.svg";
import iconMeetingInactive from "../../assets/svg/icon-meeting-inactive.svg";

export default function({ index, currentState, activityIndex }) {
  const stateActive = (meetingname, icon) => (
    <Fragment>
      <img src={icon} />
      <div className={styles.label}>
        <h4>Current Meeting Type:</h4>
        <p>{meetingname}</p>
      </div>
    </Fragment>
  );

  return (
    <div className={styles.ProductivityStats}>
      <div className={styles.title}>
        <DashboardElementHeader title="Meeting productivity" info="high" />
      </div>

      <div className={styles.main}>
        <div className={styles.indexStat}>
          <IndexGraph index={index} />
          <p>Meeting Productivity Index</p>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.iconStat} id="meeting-type">
          {currentState === "quiet" &&
            stateActive("No meeting active", iconMeetingInactive)}
          {currentState === "started" &&
            stateActive("Meeting started", iconMeetingFormal)}
          {currentState === "normal" &&
            stateActive("Formal Meeting", iconMeetingFormal)}
          {currentState === "active" &&
            stateActive("Engaged Meeting", iconMeetingEngaged)}
        </div>
      </div>
      <div className={styles.trends}>
        <DashboardElementHeader title="Trends" />
        <ActivityGraph score={activityIndex} />
      </div>
    </div>
  );
}

import React from "react";
import styles from "./ActivityLog.module.scss";

export default function({ messages }) {
  if (messages.length === 0) {
    return <p>No Entries yet.</p>;
  }

  var date = new Date();
  var timestamp = date.getTime();
  var timeformatted = date.getHours() + ":" + date.getMinutes();
  console.log(timeformatted);

  return (
    <ul className={styles.ActivityLog}>
      {messages.map(message => (
        <li><span className={styles.timestamp}>{timeformatted}</span>{message}</li>
      ))}
    </ul>
  );
}

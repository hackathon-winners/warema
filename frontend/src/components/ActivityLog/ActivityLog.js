import React from "react";
import styles from "./ActivityLog.module.scss";

export default function({ messages }) {
  if (messages.length === 0) {
    return <p>No Entries yet.</p>;
  }

  return (
    <ul className={styles.ActivityLog}>
      {messages.map(message => (
        <li key={Math.random()}>{message}</li>
      ))}
    </ul>
  );
}

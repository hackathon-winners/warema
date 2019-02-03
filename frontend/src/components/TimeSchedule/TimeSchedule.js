import React, { useEffect, useState } from "react";
import styles from "./TimeSchedule.module.scss";

export default function() {
  const [time, setTime] = useState(150);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => (prev = prev <= 0 ? 0 : prev - 1));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  var minutes = "0" + Math.floor(time / 60);
  let seconds = time - minutes * 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const percentage = (100 / 150) * (150 - time);

  const spentTime = 150 - time;
  var minutesSpent = "0" + Math.floor(spentTime / 60);
  var secondsSpent = spentTime - minutesSpent * 60;
  secondsSpent = secondsSpent < 10 ? "0" + secondsSpent : secondsSpent;

  return (
    <div className={styles.TimeSchedule}>
      <h1>
        {minutes}:{seconds}
      </h1>

      <div className={styles.timeline}>
        <div className={styles.startendlabels}>
          <div className={styles.label}>
            <p>START</p>
            <p className={styles.timestamp}>00:00</p>
          </div>
          <div className={styles.label}>
            <p>END</p>
            <p className={styles.timestamp}>02:30</p>
          </div>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: percentage + "%" }}
          />
          <div
            className={styles.label}
            style={{ left: "calc(" + percentage + "% - 20px)" }}
          >
            <p className={styles.timestamp}>
              {minutesSpent}:{secondsSpent}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

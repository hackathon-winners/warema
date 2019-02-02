import React, { useEffect, useState } from "react";
import styles from "./TimeSchedule.module.scss";

export default function() {
  const [time, setTime] = useState(150);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => prev = prev <= 0 ? 0 :prev - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  var minutes = "0" + Math.floor(time / 60);
  var seconds = time - minutes * 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  var time_spent = 150 - time;
  var time_percentage = ( time_spent * time ) / 150;

  var minutes_spent = "0" + Math.floor(time_spent / 60);
  var seconds_spent = time_spent - minutes_spent * 60;
  seconds_spent = seconds_spent < 10 ? '0' + seconds_spent : seconds_spent;

  return (
    <div className={styles.TimeSchedule}>
      <h1>{minutes}:{seconds}</h1>

      <div className={styles.timeline}>
        <div className={styles.startendlabels}>
          <div className={styles.label}><p>START</p><p className={styles.timestamp}>00:00</p></div>
          <div className={styles.label}><p>END</p><p className={styles.timestamp}>03:00</p></div>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{width: time_percentage+"%"}}></div>
          <div className={styles.label} style={{left: "calc("+time_percentage+"% - 20px)"}}>
            <p className={styles.timestamp}>{minutes_spent}:{seconds_spent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import styles from "./TimeSchedule.module.scss";

export default function() {
  const [time, setTime] = useState(150);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  var minutes = Math.floor(time / 60);
  var seconds = time - minutes * 60;

  return (
    <div className={styles.TimeSchedule}>
      <h1>{minutes}:{seconds}</h1>

      <div className={styles.timeline}>
        <div className={styles.startendlabels}>
          <div className={styles.label}><p>START</p><p className={styles.timestamp}>00:00</p></div>
          <div className={styles.label}><p>END</p><p className={styles.timestamp}>03:00</p></div>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{width: "20%"}}></div>
          <div className={styles.label} style={{left: "calc(20% - 20px)"}}><p className={styles.timestamp}>02:35</p></div>
        </div>
      </div>
    </div>
  );
}

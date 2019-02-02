import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MotionDetector from "./components/MotionDetector/MotionDetector";
import ActivityGraph from "./components/ActivityGraph/ActivityGraph";
import ProductivityStats from "./components/ProductivityStats/ProductivityStats";
import DashboardElementHeader from "./components/DashboardElementHeader/DashboardElementHeader";
import styles from "./App.module.scss";

export default function() {
  const video = useRef(undefined);
  const [score, setScore] = useState(0);

  useEffect(() => {
    var constraints = {
      audio: false,
      video: { width: 640, height: 480 }
    };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(success => {
        video.current.srcObject = success;
      })
      .catch(error => {
        console.log(error);
      });
  }, [video.current]);
  return (
    <Router>
      <div className={styles.container}>

        <div className={styles.motioncharts}>
          <h2>Motion charts</h2>
          <ActivityGraph score={score} />
        </div>

        <div className={styles.videostream}>
          <DashboardElementHeader title="Video stream" info="live"/>
          <video ref={video} autoPlay />
        </div>

        <div className={styles.motionstream}>
          <h2>Motion detection<span className={styles.focus}>live</span></h2>
          <MotionDetector setScore={setScore} video={video} />
        </div>

        <div className={styles.productivity}>
          <ProductivityStats />
          {score}
        </div>

        <div className={styles.participants}>
          <h2>Participants<span className={styles.focus}>6</span></h2>
        </div>

        <div className={styles.timeschedule}>
          <h2>Timeschedule<span className={styles.focus}>1h30m left</span></h2>
        </div>

        <div className={styles.activitylog}>
        <h2>Activity Log<span className={styles.focus}>12:43</span></h2>
        </div>

      </div>
    </Router>
  );
}

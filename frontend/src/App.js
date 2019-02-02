import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MotionDetector from "./components/MotionDetector/MotionDetector";
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
          <h2>Meeting productivity <span className={styles.focus}>• high</span></h2>
        </div>
        <div className={styles.videostream}>
        <video ref={video} autoPlay />
        
        </div>
        <div className={styles.motionstream}><MotionDetector setScore={setScore} video={video} /></div>
        <div className={styles.productivity}>{score}</div>
        <div className={styles.participants}></div>
        <div className={styles.timeschedule}></div>
        <div className={styles.activitylog}></div>1a60798ebd5f73d41ed896e4fdac61614906125b
      </div>
    </Router>
  );
}

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MotionDetector from "./components/MotionDetector/MotionDetector";
import Mira from "./components/Mira/Mira";

import styles from "./App.module.scss";

const Index = () => <h2>Home</h2>;
const Flo = () => <div><MotionDetector /></div>;

export default function() {
  return (
    <Router>
      <div className={styles.container}>
        <div className={styles.motioncharts}>
          <h2>Meeting productivity <span className={styles.focus}>• high</span></h2>
        </div>
        <div className={styles.videostream}></div>
        <div className={styles.motionstream}></div>
        <div className={styles.productivity}></div>
        <div className={styles.participants}></div>
        <div className={styles.timeschedule}></div>
        <div className={styles.activitylog}></div>
      </div>
    </Router>
  );
}

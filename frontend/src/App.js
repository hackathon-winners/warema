import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MotionDetector from "./components/MotionDetector/MotionDetector";
import ActivityGraph from "./components/ActivityGraph/ActivityGraph";
import ActivityLog from "./components/ActivityLog/ActivityLog";
import ProductivityStats from "./components/ProductivityStats/ProductivityStats";
import TimeSchedule from "./components/TimeSchedule/TimeSchedule";
import DashboardElementHeader from "./components/DashboardElementHeader/DashboardElementHeader";
import styles from "./App.module.scss";

export default function() {
  const video = useRef(undefined);
  const [currentState, setCurrentState] = useState("quiet");
  const [score, setScore] = useState(0);
  const [scoreLog, setScoreLog] = useState([]);
  const [messages, setMessages] = useState([]);
  const [activityIndex, setActivityIndex] = useState(0);

  // connect the webcam with the video element
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

  // analyze and summeraize the score
  useEffect(() => {
    // set the score
    setScoreLog(prev => {
      // make sure only the last 100 are saved
      if (prev.length === 100) {
        prev.shift();
      }
      // add latest
      prev.push(score);
      return prev;
    });

    // analyze Entries
    const overallScore = scoreLog.reduce((pv, cv) => pv + cv, 0);

    // ~2000 quiet
    // ~5000 normal
    // ~10000 active
    if (overallScore <= 2000) {
      if (currentState !== "quiet") {
        setCurrentState("quiet");
        setActivityIndex(parseFloat(1 + Math.random()).toFixed(2));
      }
    }

    if (overallScore > 2000 && overallScore <= 4000) {
      const wasThereAlreadyAStart = messages.filter(message => {
        return message.indexOf("Meeting started") > -1;
      }).length;

      if (currentState !== "started" && !wasThereAlreadyAStart) {
        setCurrentState("started");
        setActivityIndex(parseFloat(1 + Math.random()).toFixed(2));

        fetch("http://192.168.2.2:5000/blinds/meeting/start")
          .then(function() {
            console.log("ok");
          })
          .catch(function() {
            console.log("error");
          });
      }
    }

    if (overallScore > 4000 && overallScore <= 7000) {
      if (currentState !== "normal") {
        setCurrentState("normal");
        setActivityIndex(parseFloat(5 + Math.random()).toFixed(2));
        setMessages(prev => ["Meeting turned formal", ...prev]);

        fetch("http://192.168.2.2:5000/blinds/meeting/formal")
          .then(function() {
            console.log("ok");
          })
          .catch(function() {
            console.log("error");
          });
      }
    }
    if (overallScore > 20000) {
      if (currentState !== "active") {
        setCurrentState("active");
        setActivityIndex(parseFloat(8 + Math.random()).toFixed(2));
        setMessages(prev => ["Meeting turned engaged", ...prev]);

        fetch("http://192.168.2.2:5000/blinds/meeting/end")
          .then(function() {
            console.log("ok");
          })
          .catch(function() {
            console.log("error");
          });
      }
    }
    // activity index steps
    if (overallScore <= 50000) {
      setActivityIndex(parseFloat(overallScore / 6000).toFixed(2));
    }
    if (overallScore > 50000) {
      setActivityIndex(parseFloat(8 + Math.random()).toFixed(2));
    }
  }, [score]);

  return (
    <Router>
      <div className={styles.container}>
        <div className={styles.motioncharts}>
        <DashboardElementHeader title="Motion charts" info={score}/>
          <ActivityGraph score={score} globalTrend={false} />
        </div>

        <div className={styles.videostream}>
          <DashboardElementHeader title="Video stream" info="live" />
          <div className={styles.videoContainer}>
            <video ref={video} autoPlay />
          </div>
        </div>

        <div className={styles.motionstream}>
          <DashboardElementHeader title="Motion detection" info="live" />
          <MotionDetector setScore={setScore} video={video} />
        </div>

        <div className={styles.productivity}>
          <ProductivityStats
            index={activityIndex}
            currentState={currentState}
            activityIndex={activityIndex}
          />
        </div>

        <div className={styles.facedetection} />

        <div className={styles.timeschedule}>
          <h2>Timeschedule</h2>
          <TimeSchedule />
        </div>

        <div className={styles.activitylog}>
          <DashboardElementHeader title="Activity log" info="12:43" />
          <ActivityLog messages={messages} />
        </div>
      </div>
    </Router>
  );
}

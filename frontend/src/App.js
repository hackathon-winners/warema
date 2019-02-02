import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MotionDetector from "./components/MotionDetector/MotionDetector";

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
      <div className="App">
        <video ref={video} autoPlay />
        <MotionDetector setScore={setScore} video={video} />
        {score}
      </div>
    </Router>
  );
}

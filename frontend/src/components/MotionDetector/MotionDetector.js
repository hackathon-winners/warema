import React, { useState, useEffect, useRef } from "react";
import styles from "./MotionDetector.module.scss";
import { processDiff } from "./helper.js";

export default function({
  defaultWidth = 640,
  defaultHeight = 480,
  calcWidth = 64,
  calcHeight = 48
}) {
  const video = useRef(null);
  const canvas = useRef(null);
  const canvasMotion = useRef(null);
  const [score, setScore] = useState(null);

  useEffect(() => {
    var constraints = {
      audio: false,
      video: { width: defaultWidth, height: defaultHeight }
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

  useEffect(() => {
    if (!canvas.current) {
      return false;
    }
    canvas.current.width = calcWidth;
    canvas.current.height = calcHeight;
    canvasMotion.current.width = calcWidth;
    canvasMotion.current.height = calcHeight;

    const context = canvas.current.getContext("2d");
    const contextMotion = canvasMotion.current.getContext("2d");

    const id = setInterval(() => {
      context.globalCompositeOperation = "difference";
      context.drawImage(video.current, 0, 0, calcWidth, calcHeight);
      const image = context.getImageData(0, 0, calcWidth, calcHeight);

      if (canvas.current.ready === true) {
        const diffScore = processDiff(image);
        setScore(diffScore);
        contextMotion.putImageData(image, 0, 0);
      }
      context.globalCompositeOperation = "source-over";
      context.drawImage(video.current, 0, 0, calcWidth, calcHeight);
      canvas.current.ready = true;
    }, 100);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <video ref={video} autoPlay />
      </div>
      <div>
        <canvas ref={canvasMotion} />
        <div>{score}</div>
        <canvas className={styles.hide} ref={canvas} />
      </div>
    </div>
  );
}

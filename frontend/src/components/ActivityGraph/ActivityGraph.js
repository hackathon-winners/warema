import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";

// Disable animating charts by default.
defaults.global.animation = false;

export default function({ score }) {
  const [data, setData] = useState({
    labels: [],
    datasets: [{ data: [], label: "Activity Monitor" }]
  });

  useEffect(() => {
    setData(prev => {
      const d = new Date();
      const n = d.getSeconds();

      if (prev.labels.length === 60) {
        // remove
        prev.labels.shift();
        prev.datasets.forEach(dataset => {
          dataset.data.shift();
        });
      }

      // add
      prev.labels.push(n);
      prev.datasets.forEach(dataset => {
        dataset.data.push(score);
      });
      return prev;
    });
  }, [score]);

  return <Line data={data} redraw={true} />;
}

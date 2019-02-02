import React, { useEffect, useState } from "react";
import { Line, defaults } from "react-chartjs-2";

// Disable animating charts by default.
defaults.global.animation = false;

export default function({ score }) {
  const options = {
    animation: false,
    legend: {
        display: false
    },
    tooltips: {
        enabled: false
    },
    scales:{
      scaleLabel: [{
        fontColor: 'white',
      }],
      yAxes: [{
          display: false //this will remove all the x-axis grid lines
      }],
      xAxes: [{
        ticks: { 
          maxTicksLimit: 6,
         }
      }],
    },
    elements: { point: { radius: 0 } },
}
  const [data, setData] = useState({
    labels: [],
    datasets: [{ data: [], 
      label: "Activity Monitor",
      borderColor : '#3F93C6',
      backgroundColor: [
      "rgba(18, 47, 65, .5)"
      ], }],
    
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

  return <Line data={data} redraw={true} options={options}/>;
}

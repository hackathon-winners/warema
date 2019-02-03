import React, { useEffect, useState } from "react";
import { Line, defaults } from "react-chartjs-2";

// Disable animating charts by default.
defaults.global.animation = false;

export default function({ score, globalTrend }) {
  var shifting = !globalTrend;
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
        fontColor: '#8DD4FF',
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
      borderColor : '#8DD4FF',
      backgroundColor: [
      "rgba(18, 47, 65, .8)"
      ], }],
    
  });

  useEffect(() => {
    setData(prev => {
      const d = new Date();
      const n = d.getSeconds();
      console.log(shifting)
      if (prev.labels.length === 40 && shifting) {
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

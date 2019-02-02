import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

export default function() {
    const options = {
        animation: false,
        legend: {
            display: false
         },
         tooltips: {
            enabled: false
         },
        rotation: Math.PI,
        circumference: Math.PI,
        cutoutPercentage: 85,
    }
    
    const [data, setData] = useState({
        datasets: [{
            data: [
                37.1,
                100-37.1
            ],
            borderColor : 'transparent',
            backgroundColor: [
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue'
        ]
    });
    return <Doughnut data={data} options={options} />;
}

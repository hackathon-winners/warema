import React, { useEffect, useState } from "react";
import styles from "./IndexGraph.module.scss";
import { Doughnut } from "react-chartjs-2";

export default function({index}) {
    var indexPercentage = index*10;
    const options = {
        animation: false,
        legend: {
            display: false
         },
         tooltips: {
            enabled: false
         },
        rotation: -1.1 * Math.PI,
        circumference: Math.PI * 1.2,
        cutoutPercentage: 80,
    }
    
    const [data, setData] = useState({
        datasets: [{
            data: [
                indexPercentage,
                100-indexPercentage
            ],
            borderColor : 'transparent',
            backgroundColor: [
            "#3F93C6",
            "#122F41",
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
    return (
        <div className={styles.IndexGraph}>
            <Doughnut data={data} options={options} />
            <div className={styles.label}>{index}</div>
        </div>
    );
}

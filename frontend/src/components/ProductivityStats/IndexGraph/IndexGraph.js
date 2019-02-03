import React, { useEffect, useState } from "react";
import styles from "./IndexGraph.module.scss";
import { Doughnut, defaults } from "react-chartjs-2";

defaults.global.defaultFontColor='#3F93C6';
export default function({index}) {
    var indexPercentage = parseFloat(index) * 10;
    
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
                0,100
            ],
            borderColor : 'transparent',
            backgroundColor: [
            "#8DD4FF",
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

    useEffect(()=>{
        setData(prev => {
            prev.datasets[0].data = [indexPercentage, 100-indexPercentage];
            return prev;
        });
    }, [index]);

    return (
        <div className={styles.IndexGraph}>
            <Doughnut data={data} options={options}  redraw={true} />
            <div className={styles.label}>{index}</div>
        </div>
    );
}

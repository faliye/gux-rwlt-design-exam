import { useEffect, useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { GetGraphResultChangesData } from '../../../../service/graph/graph';

import './graphBox.css';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    interaction: {
        intersect: false,
    },
    plugins: {
        legend: {
            display: false
        },
    },
    scales: {
        x: {
            display: true,
        },
        y: {
            display: true,
            suggestedMin: 20,
            suggestedMax: 90,
            ticks: {
                callback: (value: number | string) => `${value}万人`
            },
        }
    }
};

function GraphBox(props: any) {
    const data: any = {
        labels: (props.data[0]?.data || []).map((item: GetGraphResultChangesData) => item.year + ' 年'),
        datasets: [
            {
                data: (props.data[0]?.data || []).map((item: GetGraphResultChangesData) => item.value),
                borderColor: 'rgba(185, 185, 185, 0.4)',
                backgroundColor: 'rgba(185, 185, 185, 0.5)',
            }
        ]
    }

    return (
        <div className="graph-wrap">
            <div className="graph-container">
                <h3>兵庫県の就職者数・進学者数の推移</h3>
                <div className="graph-box">
                    <Line
                        options={options}
                        data={data}
                    />
                </div>
            </div>
        </div>
    )
}

export default GraphBox;
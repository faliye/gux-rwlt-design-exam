import { useRef, useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { createData, createOptions,resizeCallback } from './utils';

import './graphBox.less';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function GraphBox(props: any) {
    const divRef = useRef<HTMLDivElement>(null);
    // responsive 変化
    const [responsive, setIsResponsive] = useState<boolean | undefined>(false);
    // 変数を設定し、後でaddEventListener 解除 register
    const resizeHandler = resizeCallback.bind(null,divRef,responsive,setIsResponsive) 

    useEffect(() => {
        // 初回実行時 responsive判定
        resizeHandler();
        // resizeHandler register
        document.addEventListener('resize', resizeHandler);
        return ()=>{
            // unmountの時 resizeHandler removeEventListener
            document.removeEventListener('resize', resizeHandler);
        }
    }, [resizeHandler]);

    return (
        <div className="graph-wrap">
            <div className="graph-container">
                <h3>兵庫県の就職者数・進学者数の推移</h3>
                <div className="graph-box" ref={divRef}>
                    <div className="graph-cavas-box">
                        <Line
                            options={{ ...createOptions(props.data[0]), responsive }}
                            data={createData(props.data[0])}
                            width={830}
                            height={415}
                        />
                    </div>
                    <h4>
                        出典：RESAS（地域経済分析システム）
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default GraphBox;
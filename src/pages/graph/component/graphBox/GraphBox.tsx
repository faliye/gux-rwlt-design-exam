import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts';
import { CustomizedAxisTick } from './customizedAxisTick/CustomizedAxisTick';
import { CustomizedYxisTick } from './customizedYxisTick/CustomizedYxisTick';

import './graphBox.css';

function GraphBox(props: any) {
    console.log(props.data[0]?.data || [])
    return (
        <div className="graph-wrap">
            <div className="graph-container">
                <h3>兵庫県の就職者数・進学者数の推移</h3>
                <div className="graph-box">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            width={500}
                            height={300}
                            maxBarSize={830}
                            data={props.data[0]?.data || []}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 10,
                            }}
                        >
                            <CartesianGrid />
                            <XAxis dataKey="year" tick={<CustomizedAxisTick />} />
                            <YAxis tickCount={8} domain={[20, 90]} tick={<CustomizedYxisTick />} />
                            <Tooltip />
                            <Area
                                dataKey="value"
                                stroke="rgba(185, 185, 185, 0.5)"
                                label={false}
                                strokeWidth={4}
                                fill="rgba(0,0,0,0)"
                                activeDot={{ stroke: 'rgba(185, 185, 185, 0.5)', strokeWidth: 3 }}
                                dot={{ stroke: 'rgba(185, 185, 185, 0.5)', strokeWidth: 2 }}
                                isAnimationActive={false}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default GraphBox;
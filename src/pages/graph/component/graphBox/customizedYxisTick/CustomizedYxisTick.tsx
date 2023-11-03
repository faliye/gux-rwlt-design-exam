
export function CustomizedYxisTick(props: any) {
    const { x, y, stroke, payload } = props;
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={-10} dy={16} textAnchor="end" fill="#666" fontSize={12}>
                {payload.value}万人
            </text>
        </g>
    );
}
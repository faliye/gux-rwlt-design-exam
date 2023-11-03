
export function CustomizedAxisTick(props: any) {
    const { x, y, stroke, payload } = props;
    return (
        <g transform={`translate(${x},${y})`}>
            <text
                x={0}
                y={0}
                dy={16}
                textAnchor="end"
                fill="#666"
                transform="rotate(-35)"
                fontSize={12}
            >
                {payload.value}年
            </text>
        </g>
    );
}
export function CustomizedLabel(props: any) {
    const { x, y, stroke, value } = props;
    return (
        <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
            {value}
        </text>
    );
}

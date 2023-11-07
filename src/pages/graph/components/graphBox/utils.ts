import { GetGraphResultChangesData, GetGraphResultChange } from '../../../../service/graph/graph';

/**
 * 
 * @param data 
 * @returns chart line data
 */
export const createData = (data: GetGraphResultChange) => {
    const dataArr = (data?.data || []).map((item: GetGraphResultChangesData) => item.value);
    return {
        labels: (data?.data || []).map((item: GetGraphResultChangesData) => item.year + '年'),
        datasets: [
            {
                data: dataArr,
                borderColor: 'rgba(185, 185, 185, 0.3)',
                backgroundColor: 'rgba(185, 185, 185, 0.5)',
                label: data?.label,
            }
        ]
    }
};

/**
 * 
 * @param data 
 * @returns chart line option
 */
export const createOptions = (data: GetGraphResultChange) => {
    const dataArr = (data?.data || []).map((item: GetGraphResultChangesData) => item.value);
    return {
        responsive: false,
        interaction: {
            intersect: true,
        },
        plugins: {
        },
        scales: {
            x: {
                display: true,
            },
            y: {
                display: true,
                suggestedMin: Math.min.call(dataArr),
                suggestedMax: Math.max.call(dataArr),
                ticks: {
                    callback: (value: number | string) => `${value}万人`
                },
            }
        }
    }
}

/**
 * @description canvas wrap divの変化について　chartsのresponsiveを変える
 * @param divRef React.RefObject<HTMLDivElement>
 * @param responsive boolean
 * @param setIsResponsive callback 
 */
export const resizeCallback = (divRef: React.RefObject<HTMLDivElement>,responsive: boolean |undefined, setIsResponsive: (a: boolean) => void) => {
    if (divRef?.current) {
        if(!responsive && divRef?.current?.offsetWidth < 890){
            setIsResponsive(true);
        }
    }
}
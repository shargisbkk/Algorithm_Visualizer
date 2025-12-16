import * as d3 from "d3";

export default function Barchart({ step }) {
    const width = 600;
    const height = 400;
    const padding = 40;

    const xScale = d3
        .scaleBand()
        .domain(d3.range(step.data.length))
        .range([padding, width - padding])
        .padding(0.1);
    
    const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(step.data)])
        .range([height - padding, padding]);
    
    return (
        <svg width={width} height={height}>
            {step.data.map((value, index) => {
                const isCompare = step.highlight?.includes(index);
                const isSwap = step.highlight?.includes(index);

                return (
                    <rect
                        key={index}
                        x={xScale(index)}
                        y={yScale(value)}
                        width={xScale.bandwidth()}
                        height={height - padding - yScale(value)}
                        fill={
                            isCompare ? "red" :
                            isSwap ? "orange" :
                            "blue"
                        }
                    />
                );
            })}
        </svg>
    );
}
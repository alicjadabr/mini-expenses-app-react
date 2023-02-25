import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalExpensePerMonth = Math.max(...dataPointValues);

    return(
      <div className="chart">
        {props.dataPoints.map(dataPoint => 
          <ChartBar 
          key={dataPoint.label}
          value={dataPoint.value} 
          maxValue={totalExpensePerMonth} l
          label={dataPoint.label} />)}
      </div>
    ); 
}

export default Chart;
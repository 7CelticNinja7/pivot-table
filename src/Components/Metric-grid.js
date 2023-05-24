function Metric(props) {
    // console.log("🚀 ~ file: Metric.js:2 ~ Metric ~ props:", props)
    return (
      <span className="metricData">
        ${props.stateSales.toFixed(2)}
      </span>
    );
  }
  
  export default Metric;
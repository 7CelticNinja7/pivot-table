function Metric(props) {
    // console.log("🚀 ~ file: Metric.js:2 ~ Metric ~ props:", props)
    return (
      <div className="td">
        ${props.stateSales.toFixed(2)}
      </div>
    );
  }
  
  export default Metric;
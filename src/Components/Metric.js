function Metric(props) {
    console.log("🚀 ~ file: Metric.js:2 ~ Metric ~ props:", props)
    return (
      <td>
       ${props.stateSales.toFixed(2)}
      </td>      
    );
  }
  
  export default Metric;
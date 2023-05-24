function Metric(props) {
    console.log("🚀 ~ file: Metric.js:2 ~ Metric ~ props:", props)
    const formatMoney = (saleAmount) => {
      return "$" + saleAmount.toFixed(2);
    }
    return (
      <td>
       {formatMoney(props.stateSales)}
      </td>      
    );
  }
  
  export default Metric;
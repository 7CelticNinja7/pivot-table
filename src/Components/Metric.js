function Metric(props) {
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
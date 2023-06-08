function Metric(props) {
    const formatSales = (saleAmount) => {
      return Math.round(saleAmount).toLocaleString();
    }
    return (
      <td class={props.classes}>
       {formatSales(props.stateSales)}
      </td>      
    );
  }
  
  export default Metric;
function Metric(props) {
    const formatSales = (saleAmount, aggregatorFunction) => {
      if (aggregatorFunction === "average") {
        // do average - would need a count of all sales  
      } else {
        return Math.round(saleAmount).toLocaleString();
      }
    }
    return (
      <td class={props.classes}>
       {formatSales(props.stateSales)}
      </td>
    );
  }
  
  export default Metric;
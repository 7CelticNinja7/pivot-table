import './App.css';
import sales from "./UI Take Home Test - sales-orders.json";
import PivotTable from './Components/PivotTable';

function App() {
  const rowDimensions = ["category", "subCategory"]

  const states = Array.from(new Set(sales.map(saleItem => {
    return saleItem.state;
  })));

  const getSalesByCategory = (category) => {
    const stateSalesByCategory = {};
    for (let i = 0; i < states.length; i++) {
      stateSalesByCategory[states[i]] = sales.filter(saleItem => {
            return saleItem.subCategory === category && saleItem.state === states[i];
          }).map(stateSaleItem => {
            return stateSaleItem.sales;
          }).reduce((aggregator, currentValue) => aggregator + currentValue, 0)
      };
    return stateSalesByCategory;
  }
  const getSubCategories = (category) => {
    const salesByCategory = {};
    const subCategories = Array.from(new Set(sales.filter(saleItem => {
      return saleItem.category === category;
    }).map(filteredSaleItem => {
      return filteredSaleItem.subCategory;
    })));

    for (let i = 0 ; i < subCategories.length; i++) {
      salesByCategory[subCategories[i]] = getSalesByCategory(subCategories[i]);
    }
    return salesByCategory;
  }
  const categories = Array.from(new Set(sales.map(saleItem => { return saleItem.category })));
  const mappedCategories = {};
  for (let i = 0; i < categories.length; i++) {
    mappedCategories[categories[i]] = getSubCategories(categories[i]);
  };
  const pivotTableProps = {
    MappedCategories: mappedCategories,
    States: states,
    RowDimensions: rowDimensions,
  }
  return (    
    <div>
      <PivotTable {...pivotTableProps}></PivotTable>
    </div>
  );
}

export default App;

import './App.css';
import sales from "./UI Take Home Test - sales-orders.json";
import PivotTable from './Components/PivotTable';

function App() {
  const rowDimensions = ["category", "subCategory"]
  console.log("🚀 ~ file: App.js:3 ~ sales:", sales)

  const states = Array.from(new Set(sales.map(saleItem => {
    return saleItem.state;
  })));

  const getSalesBySubCategory = (category) => {
    const stateSalesBySubCategory = {};
    for (let i = 0; i < states.length; i++) {
      stateSalesBySubCategory[states[i]] = sales.filter(saleItem => {
            return saleItem[rowDimensions[1]] === category && saleItem.state === states[i];
          }).map(stateSaleItem => {
            return stateSaleItem.sales;
          }).reduce((aggregator, currentValue) => aggregator + currentValue, 0)
      };
    return stateSalesBySubCategory;
  }

  const getSubCategories = (category) => {
    const salesByCategory = {};
    const subCategories = Array.from(new Set(sales.filter(saleItem => {
      return saleItem[rowDimensions[0]] === category;
    }).map(filteredSaleItem => {
      return filteredSaleItem[rowDimensions[1]];
    })));

    for (let i = 0 ; i < subCategories.length; i++) {
      salesByCategory[subCategories[i]] = getSalesBySubCategory(subCategories[i]);
    }
    return salesByCategory;
  }

  const categories = Array.from(new Set(sales.map(saleItem => { return saleItem[rowDimensions[0]]})));
  
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

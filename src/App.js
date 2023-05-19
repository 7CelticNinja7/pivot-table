import './App.css';
import sales from "./UI Take Home Test - sales-orders.json";
import PivotTable from './Components/PivotTable';

function App() {
  const rowDimensions = ["category", "subCategory"]

  const states = Array.from(new Set(sales.map(saleItem => {
    return saleItem.state;
  })));

  const getSalesByCategory = (category) => {
    return states.map(state => {
      return { 
        [state]: sales.filter(saleItem => {
            return saleItem.subCategory === category && saleItem.state === state;
          }).map(stateSaleItem => {
            return stateSaleItem.sales;
          }).reduce((aggregator, currentValue) => aggregator + currentValue, 0)
      };
      
    })
  }
  const getSubCategories = (category) => {
    const subCategories = Array.from(new Set(sales.filter(saleItem => {
      return saleItem.category === category;
    }).map(filteredSaleItem => {
      return filteredSaleItem.subCategory;
    })));

    return subCategories.map(subCategory => {
      return { [subCategory]: getSalesByCategory(subCategory) };
    });
  }
  const categories = Array.from(new Set(sales.map(saleItem => { return saleItem.category })));
  const mappedCategories = categories.map(category => {
    return { [category]: getSubCategories(category) }
  });
  mappedCategories.states = states;
  // console.log("🚀 ~ file: App.js:51 ~ mappedCategories ~ mappedCategories:", mappedCategories)

  return (    
    <div>
      <PivotTable rowDimensions={rowDimensions} mappedCategories={mappedCategories}></PivotTable>
    </div>
  );
}

export default App;

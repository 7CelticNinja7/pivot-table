import './App.css';
import sales from "./UI Take Home Test - sales-orders.json";
import RowDimension from './Components/RowDimension';

function App() {
  console.log(sales);
  const categories = Array.from(new Set(sales.map(saleItem => { return saleItem.category })));
  const mappedCategories = categories.reduce((categoryArrays, category) => {
    categoryArrays[category] = Array.from(new Set(sales.filter(saleItem => { 
      return saleItem.category === category}).map(saleItem => { 
        return saleItem.subCategory
      })));
    return categoryArrays;
  }, {});
  mappedCategories.states = Array.from(new Set(sales.map(saleItem => {
    return saleItem.state;
  })))
  console.log("🚀 ~ file: App.js:13 ~ mappedCategories ~ mappedCategories:", mappedCategories)
  return (    
    <div className="pivotTable">
      <div className="rowDimensionsColumn">
        <div className="rowDimensionsHeader">
          Products
        </div>
        <table>
          { categories.map(category => { return <RowDimension mainCategory={category} subCategories={mappedCategories[category]}></RowDimension> })}
        </table>
      </div>
      <div className="columnDimensionsColumn">
        <div className="columnDimensionsHeader">
          States
        </div>
        <table>
          { mappedCategories.states.map(state => { return <th>{state}</th> })}
        </table>        
      </div>
      
    </div>
  );
}

export default App;

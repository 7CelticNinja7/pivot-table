import './App.css';
import sales from "./UI Take Home Test - sales-orders.json";
import Category from "./Components/Category";

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
  console.log("🚀 ~ file: App.js:13 ~ mappedCategories ~ mappedCategories:", mappedCategories)
  return (    
    <div>
      { categories.map(category => { return <Category mainCategory={category} subCategory={mappedCategories[category]}></Category> })}
    </div>
  );
}

export default App;

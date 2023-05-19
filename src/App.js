import './App.css';
import sales from "./UI Take Home Test - sales-orders.json";
import RowDimension from './Components/RowDimension';

function App() {
  
  
  console.log(sales);
  // categories = [
  //   {
  //     Furniture: [
  //       { subA : [
  //         { state1: 1000 },
  //         { state2: 2000 },
  //       ]}
  //     ]
  //   }
  // ]
  const states = Array.from(new Set(sales.map(saleItem => {
    return saleItem.state;
  })));
  const getSalesByCategory = (category) => {
    states.forEach(state => {
      const stateSales = sales.filte0r(saleItem => {
        return saleItem.subCategory === category && saleItem.state === state;
      }).map(stateSaleItem => {
        return stateSaleItem.sales;
      });
      console.log("🚀 ~ file: App.js:29 ~ stateSales ~ stateSales:", stateSales)
      
    })
  }
  const getSubCategories = (category) => {
    // return array of subCategories with sales by state
    return Array.from(new Set(sales.filter(saleItem => {
      return saleItem.category === category;
    }).map(filteredSaleItem => {
      return { [filteredSaleItem.subCategory]: getSalesByCategory(filteredSaleItem.subCategory) };
    })));
  }
  const categories = Array.from(new Set(sales.map(saleItem => { return saleItem.category })));
  const testMapping = categories.map(category => {
    return { [category]: getSubCategories(category) }
  });
  console.log("🚀 ~ file: App.js:33 ~ testMapping ~ testMapping:", testMapping)


  return (
    <div>
      Hello
    </div>
  )

  // const mappedCategories = categories.reduce((categoryArrays, category) => {
  //   categoryArrays[category] = Array.from(new Set(sales.filter(saleItem => { 
  //     return saleItem.category === category}).map(saleItem => { 
  //       return saleItem.subCategory
  //     })));
  //   return categoryArrays;
  // }, {});
  // mappedCategories.states = Array.from(new Set(sales.map(saleItem => {
  //   return saleItem.state;
  // })));
  // const mainCategories = Object.keys(mappedCategories);
  // return (    
  //   <div className="pivotTable">
  //     <div className="pivotTableHeader">
  //       <div>Products</div>
  //       <div>States</div>
  //     </div>
  //     <div className="rowDimensionsHeader">
  //       <div>Category</div>
  //       <div>Sub-Category</div>
  //     </div>
  //     <div className="columnDimensionsHeader">
  //       { mappedCategories.states.map(state => { return <div key={state} className="headerItem">{state}</div> })}  
  //     </div>
  //     { categories.map(category => { return <RowDimension mainCategory={category} subCategories={mappedCategories[category]}></RowDimension> })}
  //     <div className="columnDimensionsColumn">
  //     {/* {
  //         // for each category, for each state, put in the metric where sales = state
  //         mainCategories.forEach(category => {
  //           mappedCategories[category].forEach(subCategory => {
  //             mappedCategories.states.forEach(state => {  
  //               console.log("🚀 ~ file: App.js:54 ~ App ~ state:", state)
  //               console.log("🚀 ~ file: App.js:45 ~ App ~ subCategory:", subCategory)
  //               const salesArray = [];
  //               sales.filter(sale => {
  //                 if (sale.subCategory === subCategory && sale.state === state) {
  //                   salesArray.push(sale.sales);
  //                 }
  //               });
  //               if (salesArray.length > 0) {
  //                 console.log("🚀 ~ file: App.js:42 ~ App ~ salesArray:", salesArray)
  //               }                
  //             })
  //           })
  //         })
  //       } */}
  //     </div>
  //   </div>
  // );
}

export default App;

import RowDimension from "./RowDimension";

function PivotTable(props) {
    return (
        <div className="pivotTable">
            <div className="pivotTableHeader">
                <div>Products</div>
                <div>States</div>
            </div>
            <div className="rowDimensionsHeader">
                <div>Category</div>
                <div>Sub-Category</div>
            </div>
            <div className="columnDimensionsHeader">
                { props.mappedCategories.states.map(state => { return <div key={state} className="headerItem">{state}</div> })}  
            </div>
            { props.mappedCategories.map(category => { return <RowDimension category={category}></RowDimension> })}
            <div className="columnDimensionsColumn">
            {/* {
                // for each category, for each state, put in the metric where sales = state
                mainCategories.forEach(category => {
                    mappedCategories[category].forEach(subCategory => {
                    mappedCategories.states.forEach(state => {  
                        console.log("🚀 ~ file: App.js:54 ~ App ~ state:", state)
                        console.log("🚀 ~ file: App.js:45 ~ App ~ subCategory:", subCategory)
                        const salesArray = [];
                        sales.filter(sale => {
                        if (sale.subCategory === subCategory && sale.state === state) {
                            salesArray.push(sale.sales);
                        }
                        });
                        if (salesArray.length > 0) {
                        console.log("🚀 ~ file: App.js:42 ~ App ~ salesArray:", salesArray)
                        }                
                    })
                    })
                })
                } */}
            </div>    
        </div>
    );
  }
  
  export default PivotTable;
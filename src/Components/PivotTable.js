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
        </div>
    );
  }
  
  export default PivotTable;
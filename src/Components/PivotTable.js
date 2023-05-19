import RowDimension from "./RowDimension";

function PivotTable(props) {
    return (
        <div>
            <div className="pivotTableHeader">
                <div>Products</div>
                <div>States</div>
            </div>
            <div className="table">
                <div className="tr">
                    { props.rowDimensions.map(dimension => { return <div className="td">{dimension}</div> })}
                    { props.mappedCategories.states.map(state => { return <div className="td" key={state}>{state}</div> })}                 
                </div>
                { props.mappedCategories.map(category => { return <RowDimension category={category}></RowDimension> })}
            </div>
        </div>
        
    );
  }
  
  export default PivotTable;
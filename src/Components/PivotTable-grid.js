import ColumnDimension from "./ColumnDimension-grid";
import RowDimension from "./RowDimension-grid";

function PivotTable(props) {
    return (
        <div className="pivotTable">
            <div className="productsHeader">Products</div>
            <div className="statesHeader">States</div>
            { props.RowDimensions.map(dimension => { return <div className="rowDimensionHeader">{dimension}</div> })}
            { Object.keys(props.MappedCategories).map(category => { return <RowDimension mainCategory={category} {...props.MappedCategories[category]}></RowDimension> })}
            
            { props.States.map(state => { return <div className="columnDimensionHeader" key={state}>{state}</div> })} 
            { Object.keys(props.MappedCategories).map(category => { return <ColumnDimension {...props.MappedCategories[category]}></ColumnDimension>})}             
        

            {/* <div className="pivotTableHeader">
                <div>Products</div>
                <div>States</div>
            </div>
            <div className="rowDimensionsHeader">
                { props.RowDimensions.map(dimension => { return <div>{dimension}</div> })}
            </div>
            <div className="columnDimensionsHeader">
                { props.States.map(state => { return <div className="stateName" key={state}>{state}</div> })} 
            </div>
                { Object.keys(props.MappedCategories).map(category => { return <RowDimension mainCategory={category} {...props.MappedCategories[category]}></RowDimension> })}
                { Object.keys(props.MappedCategories).map(category => { return <ColumnDimension {...props.MappedCategories[category]}></ColumnDimension>})}              */}
        </div>
        
    );
  }
  
  export default PivotTable;
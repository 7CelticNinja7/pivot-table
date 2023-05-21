import RowDimension from "./RowDimension";

function PivotTable(props) {
    console.log("🚀 ~ file: PivotTable.js:4 ~ PivotTable ~ props:", props)
    return (
        <div>
            <div className="pivotTableHeader">
                <div>Products</div>
                <div>States</div>
            </div>
            <div className="table">
                <div className="tr">
                    { props.RowDimensions.map(dimension => { return <div className="td">{dimension}</div> })}
                    { props.States.map(state => { return <div className="td" key={state}>{state}</div> })}                 
                </div>
                { Object.keys(props.MappedCategories).map(category => { return <RowDimension mainCategory={category} {...props.MappedCategories[category]}></RowDimension> })}
            </div>
        </div>
        
    );
  }
  
  export default PivotTable;
import RowDimension from "./RowDimension";

function PivotTable(props) {
    console.log("🚀 ~ file: PivotTable.js:4 ~ PivotTable ~ props:", props)
    return (
        <table>
            <thead>
                <th colspan={props.RowDimensions.length} className="productsHeader">Products</th>
                <th colspan={props.States.length} className="statesHeader">States</th>         
            </thead>
            <tbody>
                <tr className="subHeader">
                    { props.RowDimensions.map(dimension => { return <td>{dimension}</td> })}
                    { props.States.map(state => { return <td key={state}>{state}</td> })}        
                </tr>
                { Object.keys(props.MappedCategories).map(category => { return <RowDimension mainCategory={category} {...props.MappedCategories[category]}></RowDimension> })}
            </tbody>
        </table>
        
        
    );
  }
  
  export default PivotTable;
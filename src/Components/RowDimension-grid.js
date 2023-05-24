
function RowDimension(props) {
    let subCategories = Object.keys(props);
    subCategories.splice(0,1);
    return (
        <div className="rowDimensionsColumn">
            <div className="mainRowDimension">{ props.mainCategory }</div>
            <div className="subRowDimension">
                { subCategories.map(subCategory => { return <div key={subCategory}>{subCategory}</div> })}
            </div>
        </div>
    );
}
  
  export default RowDimension;
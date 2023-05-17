function RowDimension(props) {
    console.log(props);
    return (
        <div className="rowDimensionsColumn">
            <div className="mainRowDimension">{ props.mainCategory }</div>
            <div className="subRowDimension">
                { props.subCategories.map(category => { return <div>{category}</div> })}
            </div>
        </div>    
    );
  }
  
  export default RowDimension;
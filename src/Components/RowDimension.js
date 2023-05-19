function RowDimension(props) {
    console.log("🚀 ~ file: RowDimension.js:2 ~ RowDimension ~ props:", props)
    const mainCategory = Object.keys(props.category)[0];
    const subCategories = props.category[mainCategory].map(subCategory => {
        return Object.keys(subCategory);
    });
    return (
        <div className="rowDimensionsColumn">
            <div className="mainRowDimension">{ mainCategory }</div>
            <div className="subRowDimension">
                { subCategories.map(subCategory => { return <div key={subCategory}>{subCategory}</div> })}
            </div>
        </div>
    );
  }
  
  export default RowDimension;
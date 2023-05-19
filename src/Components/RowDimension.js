import Metric from "./Metric";
function RowDimension(props) {
    // console.log("🚀 ~ file: RowDimension.js:2 ~ RowDimension ~ props:", props)
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
            <div className="columnDimensionsColumn">
                { 
                    props.category[mainCategory].map(subCategory => {
                        console.log("🚀 ~ file: RowDimension.js:16 ~ RowDimension ~ subCategory:", subCategory)
                        const keys = Object.keys(subCategory);
                        console.log("🚀 ~ file: RowDimension.js:19 ~ RowDimension ~ subCategory[keys[0]]:", subCategory[keys[0]])
                        return subCategory[keys[0]].map(category => { 
                            const stateNames = Object.keys(category);
                            return <Metric stateSales={category[stateNames[0]]}></Metric>
                        })                    
                    }) 
                }
            </div>
        </div>
    );
}
  
  export default RowDimension;
import Metric from "./Metric";
function RowDimension(props) {
    const mainCategory = Object.keys(props.category)[0];
    const subCategories = props.category[mainCategory].map(subCategory => {
        return Object.keys(subCategory);
    });
    return (
        <div className="tr">
            <div className="td">{ mainCategory }</div>
            { subCategories.map(subCategory => { 
                return  <div className="tr" key={subCategory}>{subCategory}
                            { 
                                props.category[mainCategory].map(subCategory => {
                                    console.log("🚀 ~ file: RowDimension.js:16 ~ RowDimension ~ subCategory:", subCategory)
                                    debugger;
                                    const keys = Object.keys(subCategory);
                                    console.log("🚀 ~ file: RowDimension.js:19 ~ RowDimension ~ subCategory[keys[0]]:", subCategory[keys[0]])

                                    // TODO: right now, all subCategories metrics are showing on each subCategory
                                    return subCategory[keys[0]].map(category => { 
                                        const stateNames = Object.keys(category);
                                        console.log("🚀 ~ file: RowDimension.js:19 ~ RowDimension ~ stateNames:", stateNames)
                                        console.log("🚀 ~ file: RowDimension.js:22 ~ RowDimension ~ category[stateNames[0]]:", category[stateNames[0]])
                                        debugger;
                                        return <Metric stateSales={category[stateNames[0]]}></Metric>
                                    })                    
                                }) 
                            }
                        </div> })
            }
        </div>
    );
}
  
  export default RowDimension;
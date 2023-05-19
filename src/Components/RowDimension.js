import Metric from "./Metric";
function RowDimension(props) {
    const mainCategory = Object.keys(props.category)[0];
    const subCategories = props.category[mainCategory].map(subCategory => {
        return Object.keys(subCategory);
    });
    console.log("🚀 ~ file: RowDimension.js:7 ~ subCategories ~ subCategories:", subCategories)
    return (
        <div className="tr">
            <div className="td">{ mainCategory }</div>
            { subCategories.map(subCategoryString => {  // for each subCategory string
                // get the state keys
                const states = [];
                props.category[mainCategory].forEach(subCategory => {
                    console.log("🚀 ~ file: RowDimension.js:16 ~ RowDimension ~ subCategoryData:", subCategoryString)
                    console.log("🚀 ~ file: RowDimension.js:16 ~ RowDimension ~ subCategory:", subCategory)
                    debugger;
                    const test = Object.keys(props.category[mainCategory][subCategory][subCategoryString]);
                    console.log("🚀 ~ file: RowDimension.js:17 ~ RowDimension ~ test:", test)
                    debugger;
                })
                console.log("🚀 ~ file: RowDimension.js:17 ~ states ~ states:", states)
                debugger;
                return  <div className="tr" key={subCategoryString}>{subCategoryString}
                
                            { 
                                // // TODO: right now, all subCategories metrics are showing on each subCategory
                                // subCategory[keys[0]].map(category => { 
                                //     const stateNames = Object.keys(category);
                                //     console.log("🚀 ~ file: RowDimension.js:19 ~ RowDimension ~ stateNames:", stateNames)
                                //     console.log("🚀 ~ file: RowDimension.js:22 ~ RowDimension ~ category[stateNames[0]]:", category[stateNames[0]])
                                //     return <tr><Metric stateSales={category[stateNames[0]]}></Metric></tr>
                                // })      
                                // props.category[mainCategory].map(subCategory => {
                                //     console.log("🚀 ~ file: RowDimension.js:29 ~ RowDimension ~ subCategory:", subCategory)  
                                //     debugger;     
                                //     const keys = Object.keys(subCategory);
                                //     console.log("🚀 ~ file: RowDimension.js:19 ~ RowDimension ~ subCategory[keys[0]]:", subCategory[keys[0]])
                                                  
                                // }) 
                            }
                        </div> })
            }
        </div>
    );
}
  
  export default RowDimension;
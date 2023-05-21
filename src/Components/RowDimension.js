import Metric from "./Metric";
function RowDimension(props) {
    console.log("🚀 ~ file: RowDimension.js:3 ~ RowDimension ~ props:", props)
    const mainCategory = props.mainCategory;
    let subCategories = Object.keys(props);
    subCategories.splice(0,1);
    console.log("🚀 ~ file: RowDimension.js:7 ~ subCategories ~ subCategories:", subCategories)
    return (
        <div className="tr">
            <div className="td">{ props.mainCategory }</div>
            { subCategories.map(subCategoryString => {  // for each subCategory string
                // // get the state keys
                // const states = [];
                // props.category[mainCategory].forEach(subCategory => {
                //     console.log("🚀 ~ file: RowDimension.js:16 ~ RowDimension ~ subCategoryString:", subCategoryString)
                //     console.log("🚀 ~ file: RowDimension.js:16 ~ RowDimension ~ subCategory:", subCategory)
                    
                //     const test = Object.keys(props.category[mainCategory][0][subCategoryString]);
                //     console.log("🚀 ~ file: RowDimension.js:17 ~ RowDimension ~ test:", test)
                //     debugger;
                // })
                // console.log("🚀 ~ file: RowDimension.js:17 ~ states ~ states:", states)
                // debugger;
                return  <div className="tr" key={subCategoryString}>{subCategoryString}
                        {/* {    
                            props.category[props.mainCategory].map(subCategory => {
                                console.log("🚀 ~ file: RowDimension.js:29 ~ RowDimension ~ subCategory:", subCategory)  
                                const keyArray = Object.keys(subCategory);
                                console.log("🚀 ~ file: RowDimension.js:19 ~ RowDimension ~ subCategory[keyArray[0]]:", subCategory[keyArray[0]])
                                // TODO: right now, all subCategories metrics are showing on each subCategory
                                subCategory[keyArray[0]].map(category => { 
                                    debugger;
                                    const stateNames = Object.keys(category);
                                    console.log("🚀 ~ file: RowDimension.js:19 ~ RowDimension ~ stateNames:", stateNames)
                                    console.log("🚀 ~ file: RowDimension.js:22 ~ RowDimension ~ category[stateNames[0]]:", category[stateNames[0]])
                                    return <div className="tr"><Metric stateSales={category[stateNames[0]]}></Metric></div>
                                })            
                            }) 
                        } */}
                    </div> 
                })
            }
        </div>
    );
}
  
  export default RowDimension;
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
                const stateStrings = Object.keys(props[subCategoryString]);
                return  <div className="tr">
                    <div className="td" key={subCategoryString}>{subCategoryString}</div>
                        {    
                            // TODO: right now, all subCategories metrics are showing on each subCategory
                            stateStrings.map(state => {
                                return <Metric stateSales={props[subCategoryString][state]}></Metric>
                            })  
                        }
                    </div> 
                })
            }
        </div>
    );
}
  
  export default RowDimension;
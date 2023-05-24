import Metric from "./Metric";
function RowDimension(props) {
    console.log("🚀 ~ file: RowDimension.js:3 ~ RowDimension ~ props:", props)
    let subCategories = Object.keys(props);
    subCategories.splice(0,1);
    console.log("🚀 ~ file: RowDimension.js:5 ~ RowDimension ~ subCategories:", subCategories)
    return subCategories.map((subCategoryString, index) => {
        const stateStrings = Object.keys(props[subCategoryString]);
        console.log("🚀 ~ file: RowDimension.js:11 ~ subCategories.map ~ index:", index)
        if (index === 0) {
            return (
                <tr>
                    <td>{ props.mainCategory }</td>
                    <td key={subCategoryString}>{subCategoryString}</td>
                    { 
                        stateStrings.map(state => {
                            return <Metric stateSales={props[subCategoryString][state]}></Metric>
                        })
                    }
                </tr>
            )
        } else {
            return (
                <tr>
                    <td></td>
                    <td key={subCategoryString}>{subCategoryString}</td>
                    { 
                        stateStrings.map(state => {
                            return <Metric stateSales={props[subCategoryString][state]}></Metric>
                        })
                    }
                </tr>
            )
        }
    })
}
  
  export default RowDimension;
import Metric from "./Metric";
function RowDimension(props) {
    console.log("🚀 ~ file: RowDimension.js:3 ~ RowDimension ~ props:", props)
    let subCategories = Object.keys(props);
    subCategories.splice(0,1);
    console.log("🚀 ~ file: RowDimension.js:5 ~ RowDimension ~ subCategories:", subCategories)
    return (
        <tr>
            <td>{ props.mainCategory }</td>
            <td>
                <table>
                    { 
                        subCategories.map(subCategoryString => {                
                            return <tr>
                                <td key={subCategoryString}>{subCategoryString}</td>
                            </tr> 
                        })
                    }
                </table>
            </td>
            <td>
                <table>
                    { 
                        subCategories.map(subCategoryString => {                
                            return <tr>
                                <td key={subCategoryString}>{subCategoryString}</td>
                                { subCategories.map(subCategoryString => {
                                    const stateStrings = Object.keys(props[subCategoryString]);
                                        return stateStrings.map(state => {
                                            return <Metric stateSales={props[subCategoryString][state]}></Metric>
                                        })
                                    })
                                }
                            </tr> 
                        })
                    }
                </table>
            </td>
            
        </tr>
    );
}
  
  export default RowDimension;
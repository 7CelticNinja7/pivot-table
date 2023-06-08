import Metric from "./Metric";
function RowDimension(props) {
    let subCategories = Object.keys(props);
    subCategories.splice(0,1);
    return subCategories.map((subCategoryString, index) => {
        const stateStrings = Object.keys(props[subCategoryString]);
        if (index === 0) {
            return (
                <tr>
                    <td class="dimension-cell">{ props.mainCategory }</td>
                    <td class="dimension-cell" key={subCategoryString}>{subCategoryString}</td>
                    { 
                        stateStrings.map(state => {
                            return <Metric classes="metric-data" stateSales={props[subCategoryString][state]}></Metric>
                        })
                    }
                </tr>
            )
        } else if (index === subCategories.length -1) {
            return (
                <tr>
                    <td class="total-cell">{props.mainCategory + " "}</td>
                    <td class="total-cell" key={subCategoryString}>{subCategoryString}</td>
                    { 
                        stateStrings.map(state => {
                            return <Metric classes="metric-data total-cell" stateSales={props[subCategoryString][state]}></Metric>
                        })
                    }
                </tr>
            )
        } else {
            return (
                <tr>
                    <td class="dimension-cell"></td>
                    <td class="dimension-cell" key={subCategoryString}>{subCategoryString}</td>
                    { 
                        stateStrings.map(state => {
                            return <Metric classes="metric-data" stateSales={props[subCategoryString][state]}></Metric>
                        })
                    }
                </tr>
            )
        }
    })
}
  
  export default RowDimension;
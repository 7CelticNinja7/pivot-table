import Metric from "./Metric-grid";
function ColumnDimension(props) {
    let subCategories = Object.keys(props);
    subCategories.splice(0,1);
    return (
        <div className="tr">
            { subCategories.map(subCategoryString => {
                const stateStrings = Object.keys(props[subCategoryString]);
                    return stateStrings.map(state => {
                        return <Metric stateSales={props[subCategoryString][state]}></Metric>
                    })
                })
            }
        </div>
    );
}

export default ColumnDimension;
function RowDimension(props) {
    console.log(props);
    return (
      <div>
        <p className="mainRowDimension">{ props.mainCategory }</p>
        { props.subCategories.map(category => { return <p className="subRowDimension">{category}</p> })}
      </div>
    );
  }
  
  export default RowDimension;
const cStyles={
    width:"200px",
    boxShadow:"0 0 10px purple",
    textAlign:"center",
    padding:"20px",
     margin:"20px auto"
}

function C(props){
    return (
        <div style={cStyles}>
            <h2>C-Child</h2>
            <h5>Data:{props.info}</h5>
        </div>
    );
}
export default C;
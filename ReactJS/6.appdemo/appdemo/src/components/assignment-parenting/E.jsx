
const eStyles={
    width:"300px",
    boxShadow:"0 0 10px blue",
    textAlign:"center",
    margin:"20px auto",
    padding:"30px",
   
}

function E(props){
    return(
        <div style={eStyles}>
            <h1>E</h1>
            <p>Data: {props.in}</p>
        </div>
    );
}
export default E;
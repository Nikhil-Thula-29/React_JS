import C from "./C";
const bStyles={
    width:"600px",
    boxShadow:"0 0 10px purple",
    textAlign:"center",
    margin:"50px auto",
    padding:"50px",
   
}

function B(){
    return (
        <div style={bStyles}>
            <h2>B</h2>
            <C/>
        </div>
    );
}
export default B;
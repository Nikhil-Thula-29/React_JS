import C from "./C";
const bStyles={
    width:"600px",
    boxShadow:"0 0 10px purple",
    textAlign:"center",
    margin:"50px auto",
    padding:"50px",
   
}

function B(props){
    return(
        <div style={bStyles}>
            <h1>B</h1>
            <p>Data: {props.info}</p>
            <C info={props.info}/>
        </div>
    );
}
export default B;

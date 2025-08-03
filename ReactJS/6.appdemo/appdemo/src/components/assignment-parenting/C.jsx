import D from "./D";
const cStyles={
    width:"500px",
    boxShadow:"0 0 10px Orange",
    textAlign:"center",
    margin:"35px auto",
    padding:"50px",
   
}

function C(props){
    return(
        <div style={cStyles}>
            <h1>C</h1>
            <p>Data: {props.info}</p>
            <D info={props.info}/>
        </div>
    );
}
export default C;
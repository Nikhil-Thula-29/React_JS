import E from "./E";

const dStyles={
    width:"400px",
    boxShadow:"0 0 10px yellow",
    textAlign:"center",
    margin:"25px auto",
    padding:"40px",
   
}


function D(props){
    return(
        <div style={dStyles}>
            <h1>D</h1>
            <p>Data: {props.info}</p>
            <E in={props.info}/>
        </div>
    );
}

export default D;
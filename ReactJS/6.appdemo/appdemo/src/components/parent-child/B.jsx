import C from './C'
const bStyles={
    width:"300px",
    boxShadow:"0 0 10px red",
    textAlign:"center",
    padding:"20px",
     margin:"30px auto"
}

function B(props){
    return (
        <div style={bStyles}>
            <h2>B-Child</h2>
            <br/>
            <p>Data:{props.info}</p>
            <C info={props.info}/>   {/* From A to B and B to C */}
        </div>
    );
}
export default B;
import B from "./B";
import myfirstContext from "./context";

const aStyles={
    width:"800px",
    boxShadow:"0 0 10px green",
    textAlign:"center",
    margin:"70px auto",
    padding:"50px",
   
}

function Acon(){
    return (
        <div style={aStyles}>
            <h2>A Contex-API</h2>
            <myfirstContext.Provider value={100}>
                <B/>
            </myfirstContext.Provider>
        </div>
    );
}
export default Acon;
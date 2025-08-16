import { useSelector } from "react-redux";

function DetailsChild(){
    let data=useSelector((storedata)=>{
        return storedata;
    });
    return(
        <div style={{padding:"30px"}}>
            <h2>Details Component</h2>
            <p style={{color:"green",fontWeight:"bold", fontSize:"20px"}}>Name: {data.name}</p>
            <p style={{color:"green",fontWeight:"bold", fontSize:"20px"}}>City: {data.city}</p>
        </div>
    );
}
export default DetailsChild;
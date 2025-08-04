import { useContext } from "react";
import homeContext from "./MyHomeContext";

function Details(){
    let info=useContext(homeContext);
    return (
        <div>
            <h2>Details Component</h2>
            <h4>Data: {info}</h4>
        </div>
    );
}
export default Details;
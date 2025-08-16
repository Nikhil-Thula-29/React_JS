import NameParent from "./NameParent";
import DetailsChild from "./DetailsChild";
import City from "./City";
import './ReduxHome.css'


function ReduxHome(){
    return(
        <div>
            <div className="subAppContainer">
                <NameParent/>
                <City/>
            </div>        
            <hr></hr>
            <DetailsChild/>
        </div>
    );
}
export default ReduxHome;

import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Profile(){
    let[searchparams,setSearchParams]=useSearchParams();

    const addQueryParams=()=>{
        setSearchParams({
            name:"nikhil",
            city:"Hyderabad",
        })
    }

    return (
        <div>
            <h2>Profile</h2>
            <button onClick={addQueryParams}>Add Query Params</button>
            <button onClick={()=>{
                setSearchParams({
                    name:"Vamshi",
                    city:"Mumabi",
                })
            }}>Update Query Params</button>
            <Link to="/assignment?name=vijay&city=delhi">
            <button>Switch to Assignment</button>
            </Link>
        </div>
    );
}
export default Profile;
import { useState } from "react";
import { useDispatch } from "react-redux";
import cityActionCreator from "../actions/CityAction";


function City(){
    let [city,setCity]=useState("");
    let dispatch=useDispatch();

    const getCity=()=>{
        //This has been wrote separtely in CityAction.js File.
        /* var cityAction={
            type:"CITY",
            cityComp:city,
        } */
        var cityAction=cityActionCreator(city);
        dispatch(cityAction);
    }

    return (
        <div style={{padding:"30px"}}>
            <h2>City Component</h2>
            <select onChange={(event)=>{
                setCity(event.target.value);
            }}>
                <option>Select the city</option>
                <option>Hyderabad</option>
                <option>Bangalore</option>
                <option>Chennai</option>
                <option>Gujarat</option>
                <option>Delhi</option>
            </select>
            <button onClick={getCity}>Submit</button>
        </div>
    );
}
export default City;
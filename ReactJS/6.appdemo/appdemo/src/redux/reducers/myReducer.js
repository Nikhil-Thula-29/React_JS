const initialData={
    name:"Nikhil",
    city:"Warangal",
}

const myReducer=(state=initialData,action)=>{
    //state={name:"Nikhil",city:"Warangal"} //initial data
    if(action.type=="NAME"){
        state={
            ...state,
            name:action.nameComp,   //value stored from input field to store
        }
    }else if(action.type=="CITY"){
        state={
            ...state,   //It will copy before state object by using spread operator.
            city:action.cityName,
        }
    }
    return state;
}
export default myReducer;

const initialData={
    name:"Nikhil",
    city:"Warangal",
    products:[],
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
    }else if(action.type=="PRODUCTS"){
        state={
            ...state,
            products:action.payload,
        }
    }else if(action.type=="SINGLEPROD"){
        state={
            ...state,
            prod:action.payload,
        }
    }
    return state;
}
export default myReducer;


const counterReducer=(state,action)=>{
    //<h2>Counter App with useReducer() Hook: {state.count}</h2> //here state.count is used so should match state.count again rendering.
    //Here state.count=0
    if(action.type=="INC"){
        state={
            count:state.count+1//here key count should be same name as it is used in CounterRed in fetching state.count, so should be same.
        //It return state.count at the end.
        }
        
    }else if(action.type=="DEC"){
            //need to write state to access count.
            if(state.count>0){
                state={
                    count:state.count-1
                }
            }else{
                state={
                    count:0
                }
            }

    }else{
        state={
            count:0
        }
    }
    
    return state;
}

export default counterReducer;
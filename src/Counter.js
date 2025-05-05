import { useReducer } from "react";

const initialState = { count:0 };

function reducer(state,action){

    switch(action.type){
        case 'increment':
            return { count : state.count + 1 }
        case 'decrement':
            return { count : state.count - 1 }
        default:
            return state
    }

    // if (action.type == "increment"){
    //     return { count : state.count + 1 }
    // }
    // else if (action.type == "decrement"){
    //     return { count : state.count - 1 }
    // }
    // else{
    //     return state;
    // }
}

function Counter(){
    const [state,dispatch] = useReducer(reducer,initialState);

    return (
        <div>
            <h2>Count : {state.count}</h2>
            <button onClick={()=>dispatch({type:'increment'})}>+</button>
            <button onClick={()=>dispatch({type:'decrement'})}>-</button>
        </div>
    )
}

export default Counter;
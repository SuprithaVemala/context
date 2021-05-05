import React,{useReducer} from 'react'

function reducer(state,action){
    if(action.type==="increment"){

        return {count:state.count+1}
    }
    else if(action.type==="decrement")
    return {count:state.count-1}
    else
    return state
}
export default function ReducerComponent() {
    
    const [state, dispatch] = useReducer(reducer, {count:0})
    return (
        <div>
            <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
            <span>{state.count}</span>
        </div>
    )
}

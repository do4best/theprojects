import React, {useReducer} from 'react';
function reducer(state,action){
    switch (action.type){
        case 'increment':
            return state + 1;
        case 'decrement':
            return  state - 1;
        default:
            throw new Error("No such action exist")
    }

}
function MainUseReducers(props) {
    const [state,dispatch] = useReducer(reducer,0)
    return (
        <>
        <h1>{state}</h1>
            <button className={"btn btn-primary"} onClick={()=>dispatch({type:'increment'})}>+</button>
            <button className={"btn btn-primary"} onClick={()=>dispatch({type:'decrement'})}>-</button>

        </>
    );
}

export default MainUseReducers;
import React, {useReducer} from 'react';

function reducer(state,action){
    switch (action.type){
        case 'increment':
            return state + 1;
        case 'decrement':
            return  state - 1
        default:
            throw new Error("No such action exist")
    }
}
function MainuseReducerExample(props) {
    const [state,dispatch] = useReducer(reducer,0)
    return (
        <>
            <h1 className={"text-3xl text-center"}>{state}</h1>
            <div className="text-center">
            <button className={"btn -btn-primary"} onClick={() => dispatch({type: 'increment'})}> +</button>
            <button className={" ml-3 btn btn-primary"} onClick={() => dispatch({type: 'decrement'})}> -</button>
            </div>
        </>
    );
}

export default MainuseReducerExample;
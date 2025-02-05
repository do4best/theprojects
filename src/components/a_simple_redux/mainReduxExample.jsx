import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./slice/counter.js";
import AnotherReduxComponent from "./anotherReduxComponent.jsx";


function MainReduxExample(props) {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    return (
        <>
        <h1>Redux Example</h1>
            <button className="btn btn-primary" onClick={()=>dispatch(increment())}> Increment</button>
           <span className={"text-white"}> find it {count}</span>
            <AnotherReduxComponent/>
            <button className="btn btn-primary" onClick={()=>dispatch(decrement())}> Decrement</button>


        </>
    );
}

export default MainReduxExample;
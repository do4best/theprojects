import React from 'react';
import {useSelector} from "react-redux";

function AnotherReduxComponent(props) {
    const count = useSelector((state) => state.counter.value);
    return (
        <>
        <h2 className="text-3xl text-white">{count}</h2>
        </>
    );
}

export default AnotherReduxComponent;
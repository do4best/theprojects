import React, {useContext} from 'react';
import {Context} from "../../App.jsx";
function Btn(props) {
    const [sign, setSign] = useContext(Context);

    return (
        <>
<button className={"btn btn-primary"} onClick={()=>setSign(!sign)}>
    {sign?"Sign Out":"Sign In"}
</button>
            {sign}
        </>
    );
}

export default Btn;
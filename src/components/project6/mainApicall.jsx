import React, {useEffect, useState} from 'react';
import {getData} from "./apicall.js";
import MydataPresentation from "./mydataPresentation.jsx";

function MainApicall(props) {
    const [myData,setMyData] = useState(null)
    useEffect(() => {
        getData().then((data)=>setMyData(data))
    }, []);
    return (
        <>
            {myData?myData.map((e)=><MydataPresentation key={e.id} title={e.title} body={e.title} url={e.url}/> ):"No Data"}

        </>
    );
}

export default MainApicall;
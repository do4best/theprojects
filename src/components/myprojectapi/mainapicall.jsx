import React, {useEffect, useState} from 'react';
import ApiComponent from "./apiComponent.jsx";
import {getData, getRandomUser} from "./apicall.js";
import UserCard from "./userCard.jsx";
import Navebarexample from "./navebarexample.jsx";

function Mainapicall(props) {
    const [yourdata,setYourData] = useState(null)
    const [userData,setUserData] = useState(null)
    useEffect(() => {
        getData().then((e)=>setYourData(e))
    }, []);
useEffect(()=>{
    getRandomUser().then((e)=>setUserData(e.results[0]))
},[])
const refreshButton=()=>{
    getRandomUser().then((e)=>setUserData(e.results[0]))
}

    return (
        <>
            <Navebarexample/>
            {userData && <UserCard  data={userData}/>}
            <button className="btn btn-primary" onClick={refreshButton}>Refresh User</button>
            {yourdata?yourdata.map((e)=>(<ApiComponent key={e.id} title={e.title} body={e.body}/> )):"No Data"}

        </>
    );
}

export default Mainapicall;
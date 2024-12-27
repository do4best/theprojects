import React, {useState} from 'react';
import hero from './hero.jpg'
import NavLink from "./navLink.jsx";
function NetFlex(props) {
    const[secrol,setScrol] =useState(false)
    window.onscroll=()=>{
        setScrol(window.pageYOffset === 0 ? false:true)
        return ()=>(window.onscroll = null)
    }
    console.log(secrol)
    return (
        <>
            <NavLink/>
            <div className="hero">
                <img src={hero} alt="Avengers"/>
                <img src={hero} alt="Avengers"/>
                <img src={hero} alt="Avengers"/>
            </div>
        </>
    );
}

export default NetFlex;
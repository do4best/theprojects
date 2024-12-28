import React from 'react';
import styled from "styled-components";
import logo from './bannes.jpeg';
import {signOut,onAuthStateChanged} from 'firebase/auth';
import {firebaseAuth} from "../store/utils/firebase-config.js";
import {BrowserRouter, Route, Routes,Link,useNavigate} from "react-router-dom";
import {AiOutlineLogout} from "react-icons/ai";
function NavLink(props) {
    const showLink = [
        {name : "Home", link : '/'},
        {name : "Tv Show", link : '/tv'},
        {name : "My List", link : '/mylist'},
        {name : "Movies", link : '/movies'},
    ]
    const navigate = useNavigate();
    onAuthStateChanged(firebaseAuth,(currenUser)=>{
        if(!currenUser)navigate("/login")
    })
    return (
        <>
        <NaveContainer>
            <div className="leftside">
<div className="logo">
    <img src={logo} alt="Logo" className={"bg-contain"}/>
</div>
                <ul className="links">
                    { showLink.map(({name,link})=>{
                        return (
                            <li key={name}>
                                <Link to={link}>{name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
<div className="rightside">
    <button onClick={()=>signOut(firebaseAuth)}>
        <AiOutlineLogout size={22}/>
    </button>
</div>
        </NaveContainer>
        </>
    );
}
const NaveContainer = styled.div`
  
    background-color: black;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: flex-start;
    .logo{
   height: 150px;
        width: 400px;
    }
    .links{
        display: flex;
        padding: 50px;
        flex-direction: row;
        align-items: flex-start;
        justify-content:start;
        position: absolute;
        top: 5px;
        margin-top: 10px;
        gap: 15px;
        margin-left: 400px;
        font-size: 18px;
        color: white;
        text-decoration: none;
        list-style: none;
    }
    .rightside{
        position: absolute;
        right: 2px;
        margin-top: 20px;
        padding: 20px;
       color: red;
        
    }
`
export default NavLink;
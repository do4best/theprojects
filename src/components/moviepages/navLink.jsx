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
    display: flex;
    align-items: center;
    justify-content: space-between;
  
   .notScrolled{
       display: flex;
   }
    .scrolled{
        display: flex;
        background-color: black;
    }
    .nav{
        position: sticky;
        top:0;
        height: 6rem;
        width: 100%;
        justify-content: space-between;
        padding: 0.4rem;
        align-items: center;
        transition: 0.3s ease-in-out;        
    }
    .leftside{
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-left: 5rem;
    }
    .logo{
   display: flex;
        align-items: center;
        justify-content: center;
    }
    .links{
       display: flex;
        list-style: none;
        gap: 3rem;
        li{
            a{
                color: white;
                text-decoration: none;
            }
            
        }
    }
    .rightside{
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-right: 1rem;
        button{
            background-color: red;
            border: none;
            cursor: pointer;
            border-radius: 50%;
        }&:focus{
        outline: none;
         }
        svg{
            color: white;
            font-size: 2rem;
        }
        
    }
`
export default NavLink;
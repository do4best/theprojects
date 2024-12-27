import React from 'react';
import styled from "styled-components";
import logo from '../netlogo.png';
import {BrowserRouter, Route, Routes,Link} from "react-router-dom";
import {AiOutlineLogout} from "react-icons/ai";
function NavLink(props) {
    const showLink = [
        {name : "Home", link : '/'},
        {name : "Tv Show", link : '/tv'},
        {name : "My List", link : '/mylist'},
        {name : "Movies", link : '/movies'},
    ]
    return (
        <>
        <NaveContainer>
            <div className="leftside">
<div className="logo">
    {/*<img src={logo} alt="Logo"/>*/}
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
    <button>
        <AiOutlineLogout/>
    </button>
</div>
        </NaveContainer>
        </>
    );
}
const NaveContainer = styled.div`
`
export default NavLink;
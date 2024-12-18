import React from 'react';
import netlogo from './netlogo.png'
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

function Header({login}) {
    const navigate = useNavigate()
    return (
        <>
<HeaderContainer>
    <div className="logo">
        <img src={netlogo} alt="no connection"/>
    </div>
    <button onClick={()=>navigate(login ? '/login' : '/signup' )}>
        {login ? 'Log In' : 'Sign Up'}
    </button>
</HeaderContainer>
        </>
    );
}
const HeaderContainer = styled.div`
display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
    .logo{
        img{
            height: 3rem;
            cursor: pointer;
        }
    }
    button{
        padding: 0.5rem 1rem;
        background-color: red;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
    }
    

`


export default Header;

import React, {useState} from 'react';
import styled from "styled-components";
import Header from "../header.jsx";
import Background from "../background.jsx";

function LoginPage(props) {
    return (
        <>
        <Wrapper>

<Background/>
<div className="logincontent">
    <Header/>
    <div className="form-wrapper">
        <div className="form">
            <div className="title">
                <h1>Login</h1>
            </div>
            <div className="container">
                <input type="text"
                       placeholder={"email"}/>
                <input type="password"
                       placeholder={"password"}/>
                <button>Login</button>
            </div>
        </div>

    </div>
</div>
        </Wrapper>

        </>
    );
}

const Wrapper = styled.div`
    position: relative;

    .logincontent {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
        height: 100vh;
        width: 100vw;
        grid-template-columns: 15vh 90vh;
 .form-wrapper{
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     gap: 2rem;
     height: 85vh;
 } 
    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        background-color: rgba(0, 0, 0, 0.79);
        height: 70vh;
        padding: 2rem;
        color: white;
        border-radius: 0.4rem;
    }
        .container{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            input{
                border-radius: 0.4rem;
                padding: 0.5rem 1rem;
                width: 25rem;
                height: 2.4rem;
                outline: none;
            }
            button{
                padding: 0.5rem;
                background-color: red;
                border: none;
                cursor: pointer;
                border: 0.4rem;
                height: 3.4rem;
                color: white;
                font-weight: bolder;
                font-size: 1.05rem;
                border-radius: 0.4rem;
            }
        }
    
    }
`
export default LoginPage;
import React, {useState} from 'react';
import styled from "styled-components";
import Header from "../header.jsx";
import Background from "../background.jsx";

function SignupPage(props) {
    const [showPassword,setPassword] = useState(false)
    return (
        <>
<Container>
    <Background/>
<div className="content">
    <Header login/>
    <div className="body">
        <div className="text">
            <h1>Unlimited movies, Tv shows and more</h1>
            <h4>Watch anywhere, Cancel Anytime</h4>
            <h6>Ready to Watch? Enter your Email to create or restart Membership</h6>
        </div>
        <div className="form">
            {showPassword?(<input type="password" placeholder={"Password"} name={'password'}/>): (
                <input type="email" placeholder={"EmailAddress"} name={'email'}/>)}
            {!showPassword ? <button onClick={()=>setPassword(true)}>Get Started</button> : <button>Sign Up</button>}


        </div>
    </div>
</div>
</Container>
        </>
    );
}
const Container = styled.div`
    position: relative;
    .content{
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.79);
        height: 100vh;
        width: 100vw;
        grid-template-columns: 15vh 90vh;
        .body{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 2rem;
            color: white;
        }
        h1{
            padding: 0 25rem;
            
            font-size: 6rem;
            
        }
        h4{
            margin-top: -1.5rem;
            font-size: 3rem;
        }
        h6{
            margin-top: 1.5rem;
            font-size: 1.5rem;
        }
        .form{
            display: grid;
            width: 48%;
            margin-top: 2rem;
            grid-template-columns: ${({showPassword})=>showPassword?"1fr 1fr":"2fr 2fr"};
            input{
                
                color: black;
                padding: 1.5rem;
                font-size: 1.2rem;
                width: 45rem;
                &:focus{
                    outline: none;
                
            }
            button{
                padding: 0.5rem 1rem;
                background: red;
                border: none;
                cursor: pointer;
                font-size: 1.05rem;
                width: 10rem;
            }
        }
        
    }

`
export default SignupPage;
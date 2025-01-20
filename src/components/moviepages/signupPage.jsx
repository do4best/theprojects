import React, {useState} from 'react';
import styled from "styled-components";
import {createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'

import {firebaseAuth} from "../store/utils/firebase-config.js";
import Header from "../header.jsx";
import Background from "../background.jsx";
import {Navigate,useNavigate} from "react-router-dom";

function SignupPage(props) {
    const [showPassword,setPassword] = useState(false)
    const [formValue,setFormValue] = useState({email:"",password:""})
    const navigate = useNavigate()

    const handelSignIn = async()=>{
        try{
            const {email,password} = formValue;
            await createUserWithEmailAndPassword(firebaseAuth,email,password)
        }catch(error){
            console.log(error )

        }
    }
    onAuthStateChanged(firebaseAuth,(currenUser)=>{
        if(currenUser)navigate("/")
    })
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
            {showPassword?(<input type="password" placeholder={"Password"} name={'password'} value={formValue.password} onChange={(e)=>
            setFormValue({...formValue,[e.target.name]: e.target.value})}/>): (
                <input type="email" placeholder={"EmailAddress"} name={'email'} value={formValue.email} onChange={(e)=>
                    setFormValue({...formValue,[e.target.name]: e.target.value})}/>)}
            {!showPassword ? <button onClick={()=>setPassword(true)}>Get Started</button> : <button onClick={handelSignIn}>Sign Up</button>}


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
        grid-template-columns: 10vh 90vh;
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
            
            font-size: 4rem;
            
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
            width: 70%;
            margin-top: 2rem;
            grid-template-columns: ${({showPassword})=>showPassword?"1fr 1fr":"2fr 1fr"};
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
                background-color: red;
                border: none;
                cursor: pointer;
                font-size: 1.05rem;
                width: 10rem;
            }
        }
        
    }

`
export default SignupPage;
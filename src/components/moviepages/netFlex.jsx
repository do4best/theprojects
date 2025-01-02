import React, {useState} from 'react';
import hero from './hero.jpg'
import NavLink from "./navLink.jsx";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Card from "./card.jsx";
function NetFlex(props) {
    const[secrol,setScrol] =useState(false)
    window.onscroll=()=>{
        setScrol(window.pageYOffset === 0 ? false:true)
        return ()=>(window.onscroll = null)
    }
    const navigate = useNavigate()
    return (
        <>
            <HeroContainer>
            <NavLink/>
            <div className="hero">
                <img className={"background-image"} src={hero} alt="Avengers"/>
                <div className="container">
                    <div className="title">
                        <h1>Super Man</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deserunt esse harum impedit labore laborum maxime nulla, praesentium saepe unde?</p>
                    </div>
                    <div className="buttons">
                        <button onClick={()=>navigate('/player')} className="playBtn">Play</button>
                        <button className="playMore">More</button>
                    </div>
                </div>

            </div>
                <Card/>
            </HeroContainer>
        </>
    );
}
const HeroContainer = styled.div`
    background-color: black;
    .hero{
        position: relative;
        .background-image{
            filter: brightness(40%);
        }
        img{
            height: 70vh;
            width: 100%;
        }
        .container{
            position: absolute;
            bottom: 1rem;
            .title{
                h1{
                    margin-left: 5rem;
                    text-transform: lowercase;
                    font-size: 73px;
                    background: -webkit-linear-gradient(#eee,rgb(128,13,13));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                p{
                    margin-bottom: -50px;
                    width: 640px;
                    margin-left: 5rem;
                    font-family: sans-serif;
                    color: white ;
                }
            }
            .buttons{
                display: flex;
                margin: 5rem;
                gap: 2rem;
            }
            .playBtn{
                display: flex;
                align-items: center;
                justify-content: center;
                color: red;
                border-radius: 1rem;
                font-size: 1.4rem;
                gap: 1rem;
                padding: 0.9rem;
                padding-left: 2rem;
                padding-right: 2.4rem;
                cursor: pointer;
                border: 0;
            }
            .playMore{
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                background-color: black;
                border-radius: 1rem;
                font-size: 1.4rem;
                gap: 1rem;
                padding: 0.9rem;
                padding-left: 2rem;
                padding-right: 2.4rem;
                cursor: pointer;
                border: 0.1rem solid white;
            }
            
        }
    }
    
`

export default NetFlex;
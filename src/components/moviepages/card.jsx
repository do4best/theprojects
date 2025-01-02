import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import movieposter from'./themovie.jpg'
import myvideo11 from './myvideo22.mp4'
import {IoPlayCircleSharp} from "react-icons/io5";
import {RiThumbDownFill, RiThumbUpFill} from "react-icons/ri";
import {BsCheck} from "react-icons/bs";
import {AiOutlinePlus} from "react-icons/ai";
import {BiChevronDown} from "react-icons/bi";
function Card(props) {
    const [onHovered,setHovered] = useState(false)
    const navigator = useNavigate()
    return (
        <>
        <CardContainer onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <img src={movieposter} alt="movie" onClick={() => navigator('/player')}/>
            {onHovered && (
                <div className={"hover"}>
                    <div className={"image-hover"}>
                        <img src={movieposter} alt="movie" onClick={() => navigator('/player')}/>
                        <video  src={myvideo11} autoPlay loop controls></video>

                    </div>
                    <div className="info-container">
                        <h3 className="moviename" onClick={() => navigator('/player')}>Blue</h3>
                        <div className="icons">
                            <div className="controls">
                                <IoPlayCircleSharp title={"play"} onClick={() => navigator('/player')}/>
                                <RiThumbUpFill title={"like"}/>
                                <RiThumbDownFill title={"Dislike"}/>
                                <BsCheck title={"Remove From List"}/>
                                <AiOutlinePlus title={"add to my list"}/>
                            </div>
                            <div className="info">
                                <BiChevronDown title={"More Info"}/>
                            </div>
                        </div>
                        <div className="gener">
                            <ul>
                                <li>Action</li>
                                <li>Action</li>
                                <li>Action</li>
                                <li>Action</li>
                            </ul>
                        </div>
                    </div>
                </div>

            )}
        </CardContainer>

        </>
    )
        ;
}

const CardContainer = styled.div`
    margin-top: 1rem;
    max-width: 230px;
    width: 230px;
    height: 100%;
    position: relative;
    cursor: pointer;
    background-color: red;
    img{
        border-radius: 0.2rem;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
    .hover{
        z-index: 99;
        height: max-content;
        width: 20rem;
        position: absolute;
        top: -18vh;
        left: 0;
        border-radius: 0.2rem;
        border: 0.1rem solid gray ;
        background-color: #181818;
        transition: 0.3s ease-out;
        .image-hover{
            position: relative;
            height: 140px;
            img{
                width: 100%;
                height: 150px;
                object-fit: cover;
                border-radius: 0.3rem;
                top: 0;
                z-index: 4;
                position: absolute;
            }
            video{
                width: 100%;
                height: 150px;
                object-fit: cover;
                border-radius: 0.3rem;
                top: 0;
                z-index: 4;
                position: absolute;
            }
        }
        .info{
            display: flex;
            flex-direction: column;
            padding: 1rem;
            gap: 0.5rem;
            .moviename{
                color: white;
            }
        }
        .icons{
            display: flex;
            justify-content: space-between;
            .controls{
                display: flex;
                gap: 0.5rem;
            }
        
        svg {
            color: #b8b8b8;
            border: 0.1rem solid white;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor: pointer;
            transition: 0.3s ease-in-out;

            &:hover {
                color: #b8b8b8;
            }
        }   
        }
        .gener{
            display: flex;
            color: white;
            ul{
                display: flex;
                gap: 1rem;
                li{
                    padding-right:0.7rem;
                    &:first-of-type{
                        list-style-type: none;
                    }
                }
            }
            
        }
    }

`
export default Card;
import React from 'react';
import styled from "styled-components";
import {BsArrowLeft} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import myvideo11 from './myvideo22.mp4'

function Player(props) {
    const navigate = useNavigate()
    return (
        <>
        <PlayContainer>

            <div className="player">
                <h1>Blue by Billie Ellish</h1>
                <div className="backarow">
                    <BsArrowLeft onClick={() => navigate(-1)}/>
                </div>
                <video src={myvideo11} autoPlay loop controls></video>
            </div>
        </PlayContainer>
        </>
    );
}
const PlayContainer = styled.div`
.player{
    width: 100vw;
    height: 100vh;
    .backarow{
        position: absolute;
        padding: 2rem;
        z-index: 1;
        
        svg{
            font-size: 3rem;
            cursor: pointer;
            color: white;
        }
    }
    video{
        width: 100%;
        height: 100% ;
    }
}

`
export default Player;
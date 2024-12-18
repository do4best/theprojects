import React from 'react';
import styled from "styled-components";
import netflexbg from './netlfelxbg.jpg'
function Background(props) {
    return (

        <>
        <BackgroundContainer>
            <img src={netflexbg} alt={"No Internet "}/>
        </BackgroundContainer>
        </>
    );
}
const BackgroundContainer = styled.div`
height: 100vh;
width: 100vw;
img{
    height: 100vh;
    width: 100vw;
}`

export default Background;
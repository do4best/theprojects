import React from 'react';

function Video(props) {
    return (
        <>
        <h1>Main Video Example</h1>
            <video  src="./bgvideo.mp4" className={"h-100 w-100"} controls loop/>

        </>
    );
}

export default Video;
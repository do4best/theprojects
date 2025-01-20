import React from 'react';

function MainFlex(props) {
    return (
        <>
        <div className="flex m-7 h-[500px] max-w-[600px] bg-black">
            <div className="h-24 w-24 bg-green-400">Green</div>
            <div className="h-24 w-24 bg-red-400">Red</div>
            <div className="h-24 w-24 bg-blue-400">Blue</div>
        </div>

        </>
    );
}

export default MainFlex;
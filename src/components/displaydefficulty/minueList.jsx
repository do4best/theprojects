import React from 'react';
import MenuListItem from "./menuListItem.jsx";

function MinueList({difficulty}) {
    return (
        <>
        <div className="h-[250px] w-[250px] flex felx-col justify-center items-center">
            <MenuListItem difficulty={"Hard"}/>
            <MenuListItem difficulty={"Medium"}/>
            <MenuListItem difficulty={"Easy"}/>
        </div>
        </>
    );
}

export default MinueList;
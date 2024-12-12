import React from 'react';
import MenuListItem from "./menuListItem.jsx";
import PropTypes from "prop-types";

function MinueList({difficulty,onItemClick}) {
    return (
        <>
        <div className="h-[250px] w-[250px]  flex flex-col border-2 gap-2 justify-center items-center">
            <MenuListItem onClick={onItemClick} difficulty={"Hard"}/>
            <MenuListItem onClick={onItemClick} difficulty={"Medium"}/>
            <MenuListItem onClick={onItemClick} difficulty={"Easy"}/>
        </div>
        </>
    );
}

export default MinueList;

MenuListItem.propTypes={
    difficulty:PropTypes.elementType,
    onItemClick:PropTypes.element

}
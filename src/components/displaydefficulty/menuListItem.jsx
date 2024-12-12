import React, {useState} from 'react';
import PropTypes from "prop-types";

function MenuListItem({difficulty,onClick}) {
    const [hover,setHover] = useState(false)
    function activate(){
        setHover(true)
    }
    function deActivate(){
        setHover(false)
    }
    function toggleColor(){
        if(hover){
            return '#a5e9ff'
        }else{
            return '#eff0ef'
        }
    }
    const itemClicked=()=>{
        onClick(difficulty)
    }
    return (
        <>
        <div onClick={itemClicked} className={"h-[50px] w-[100%] flex justify-center items-center"} onMouseEnter={activate} onMouseLeave={deActivate} style={{backgroundColor:toggleColor()}}>
       set to : {difficulty}
        </div>
        </>
    );
}

export default MenuListItem;
MenuListItem.propTypes={
    difficulty:PropTypes.elementType,
    onClick:PropTypes.element

}
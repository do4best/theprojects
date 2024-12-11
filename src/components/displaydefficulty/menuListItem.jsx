import React, {useState} from 'react';

function MenuListItem({difficulty}) {
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
    return (
        <>
        <div className={"h-[50px] w-100% flex  justify-center items-center"} onMouseEnter={activate} onMouseLeave={deActivate} style={{backgroundColor:toggleColor()}}>
      The Difficulty is : {difficulty}
        </div>
        </>
    );
}

export default MenuListItem;
import React, {useState} from 'react';
import DisplayDifficulty from "./displayDiffeculty.jsx";
import MinueList from "./minueList.jsx";

function MainDisplayDifficulty(props) {
    const [currentDifficulty,setCurrentDifficulty] = useState("Isane")
    const onItemClicked=(item)=>{
        setCurrentDifficulty(item)
    }
    return (
        <>
            <div className="flex flex-row justify-around items-center">
                <DisplayDifficulty difficulty={currentDifficulty}/>
                <MinueList onItemClick={onItemClicked} difficulty={currentDifficulty}/>
            </div>

        </>
    );
}

export default MainDisplayDifficulty;
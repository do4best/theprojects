import React from 'react';
import PropTypes from "prop-types";
import MenuListItem from "./menuListItem.jsx";

function DisplayDifficulty({difficulty}) {
    return (
        <>
            <div className="h-[250px] w-[250px] border-2 flex justify-center items-center">
                {difficulty?`Difficulty is set ${difficulty}`:`Difficulty is not set`}

            </div>
        </>
    );
}

export default DisplayDifficulty;
DisplayDifficulty.propTypes={
    difficulty : PropTypes.string
}

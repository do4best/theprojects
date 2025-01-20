import React, {useState} from 'react';
import Model from "./model.jsx";

function PopupProject(props) {
    const [showModel,setShowModel] = useState(false)
    return (
        <>
        <div className="h-screen  flex flex-col items-center gap-6 bg-[#14161b] text-white">
            <h1 className="text-5xl font-bold mt-4">Popup Model</h1>
            <button onClick={()=>setShowModel(true)} className="bg-indigo-500 px-4 py-2 rounded-lg text-lg ">Get the Books</button>
            {showModel && <Model onClose={()=>setShowModel(false)}/>}
        </div>

        </>
    );
}

export default PopupProject;
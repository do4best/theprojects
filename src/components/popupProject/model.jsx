import React, {useRef} from 'react';
import {FaWindowClose} from "react-icons/fa";
import {FaDownload} from "react-icons/fa6";

function Model({onClose}) {
    const refModel = useRef();
    const closeModel=(e)=>{
        if(refModel.current === e.target){
            onClose()
        }
    }
    return (
        <>
        <div ref={refModel} onClick={closeModel} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="mt-10 flex flex-col gap-5 text-white">
                <button onClick={onClose} className="place-self-end"><FaWindowClose size={30}/> </button>
                <div className="bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
                    <h1 className={"text-3xl font-extrabold"}>Download Free EBook</h1>
                    <p className={"text-3xl font-bold max-w-md text-center"}>Want to learn how to crack web Development interview </p>
                    <form action="">
                        <input type="email" className={"w-full px-4 py-3 text-black border-gray-600 bg-white"} placeholder={"Enter Your Email"} required/>
                        <button className={"mt-4 w-full flex items-center justify-center gap-2 px-5 py-2 font-medium rounded-md bg-black"}><FaDownload/>Download E Book</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default Model;
import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {MdDarkMode} from "react-icons/md";
import {FiSun} from "react-icons/fi";
import Model from "../popupProject/model.jsx";

function Header(props) {
    const [showModel,setShowModel] = useState(false)
    const [hidden,setHidden] = useState(false)
    const [darkMode,setDarkMode] = useState(localStorage.getItem("darkMode")?localStorage.getItem("darkMode"):"light")
    // function getRandomColor(){
    //     let letters = "0123456789";
    //     let color = '#';
    //     for(let i=0; i<6; i++){
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }
    useEffect(() => {
        localStorage.setItem("darkMode",darkMode)
        const localTheme = localStorage.getItem("darkMode")
        document.querySelector("html").setAttribute("data-theme",localTheme)
    }, [darkMode]);
    const handelToggle=(e)=>{
        if(e.target.checked){

        setDarkMode("light")}else{

        setDarkMode("darkMode")}



    }
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={()=>setHidden(!hidden)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className={`${hidden?"hidden":""} menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow`}>
                            <li> <div className="form-control ">
                                <input type="text" placeholder="Search" className="input w-full input-bordered  md:w-auto" />
                            </div></li>
                            <li> <NavLink to={"/"}>Home</NavLink></li>
                            <li>
                                <NavLink to={"/movies/popular"}>Popular</NavLink>
                            </li>
                            <li><NavLink to={"/movies/top"}>Top</NavLink></li>
                            <li><NavLink to={"/movies/upcoming"}>Upcoming</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Ravi Movies</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                        <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/movies/popular"}>Popular</NavLink>
                        </li>
                        <li><NavLink to={"/movies/top"}>Top</NavLink></li>
                        <li><NavLink to={"/movies/upcoming"}>Upcoming</NavLink></li>
                        <li><label className={"absolute right-15"}>
                            <input type="checkbox" onChange={handelToggle} />
                            {darkMode?<MdDarkMode size={25}/>:<FiSun size={25}/>}

                        </label></li>
                    </ul>

                    <div className="form-control absolute right-20">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                </div>
                <div className="navbar-end">
                    <button onClick={()=>setShowModel(true)} className="bg-indigo-500 px-4 py-2 rounded-lg text-lg ">Email </button>
                </div>

            </div>
            {/*{showModel && <Model onClose={()=>setShowModel(true)}/>}*/}

        </>
    );
}

export default Header;
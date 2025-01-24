import React from 'react';
import imgnotfound from '../../../assets/pagenotfound.png'
import {Link} from "react-router-dom";
function Pagenotfound(props) {
    return (
        <>
   <div className="flex flex-col justify-center px-2">
       <div className="flex flex-col items-center my-4">
           <p className="text-7xl text-gray-700 font-bol my-10 darl:text-white">404, Oops!</p>
           <div className="max-w-lg">
           <img className={"rounded"} src={imgnotfound} alt="Imagenotfound"/>
           </div>
       </div>
       <div className="flex justify-center my-4">
           <Link to="/">
               <button className="btn btn-primary"> Back to Ravi Movies</button>
           </Link>
       </div>
   </div>

        </>
    );
}

export {Pagenotfound};
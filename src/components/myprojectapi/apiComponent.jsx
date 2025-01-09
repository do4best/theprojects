import React from 'react';

function ApiComponent({imge,title,body}) {
    return (
        <>
       <div className="card card-compact bg-base-100 w-96 shadow-xl">
           <figure>
               <img src={imge} alt={title}/>
           </figure>
           <div className="card-body">
               <h2 className="card-title">
                   {title}
               </h2>
               <p>{body}</p>
           </div>
       </div>
        </>
    );
}

export default ApiComponent;
import React from 'react';

function MydataPresentation({url,title}) {
    return (
        <>
        <div className=" card bg-base-100 w-96 shadow-xl">
            <h2 className={"card-body"}>{title}</h2>
            <p>{title}</p>
        </div>
            <figure>
                <img src={url} alt={title}/>
            </figure>
        </>
    );
}

export default MydataPresentation;
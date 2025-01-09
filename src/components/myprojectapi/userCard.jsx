import React from 'react';

function UserCard({data}) {
    console.log(data)
    return (
        <>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img src={data.picture.large} alt={data.name.first}/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.name.first}
                    </h2>
                    <p>{data.location.city}</p>
                </div>
            </div>

        </>
    );
}

export default UserCard;
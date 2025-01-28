import React from 'react';
import {RiCloseCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";

function TodoItems({getEdittodoDate,todos,getIDtobeDeleted}) {
    return todos.map((item,index)=>(<div key={`${item.id}${index}`} className={" rounded bg-amber-600 text-blue-600 flex flex-row justify-between gap-3 py-5"}>
                <p className={"text-2xl px-5"}>{item.text}</p>
                <div className={"bg-white text-black flex flex-row gap-3 py-1 px-2  mr-2"}>
                    <RiCloseCircleLine onClick={()=>getIDtobeDeleted(todos.id)} size={20}/>
                    <TiEdit size={20} onClick={()=>getEdittodoDate({id:item.id, text: item.text})}/>
                </div>
            </div>))



}

export default TodoItems;
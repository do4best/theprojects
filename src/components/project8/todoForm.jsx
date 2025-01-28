import React, {useEffect, useState} from 'react';

function TodoForm({editData,getNewlyCreatedItem}) {

    const [inputValue,setInputValue] = useState("")
    const handelSubmit=(e)=>{
        e.preventDefault()
        const isEdit = editData && Object.keys(editData).length !== 0;
        const newlyCreatedTodo = {
            id: isEdit ? editData.id: Math.floor(Math.random()*1000),
            text : inputValue
        }
        getNewlyCreatedItem(newlyCreatedTodo)
        setInputValue("")

    }
    const handelInputChange=(e)=>{
        const {value} = e.target;
        setInputValue(value)


    }
    useEffect(()=>{
        if(editData && Object.keys(editData).length  !== 0)setInputValue(editData.text)
    },[editData]);

    return (
        <>

            <form className={"flex justify-end mt-5"} onSubmit={handelSubmit}>
                <input type="text" value={inputValue} className={"input input-bordered w-full   "} onChange={handelInputChange} placeholder={"Enter your to do"}/>
                <button className={"px-6 py-0.5 rounded bg-black text-white"}  type={'submit'}>{isEdit ? "Edit Todo":"Add Todo"}</button>
            </form>

        </>
    );
}

export default TodoForm;
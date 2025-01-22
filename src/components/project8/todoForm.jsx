import React, {useState} from 'react';

function TodoForm({getNewlyCreatedItem}) {

    const [inputValue,setInputValue] = useState("")
    const handelSubmit=(e)=>{
        e.preventDefault()
        const newlyCreatedTodo = {
            id: Math.floor(Math.random()*1000),
            text : inputValue
        }
        getNewlyCreatedItem(newlyCreatedTodo)

    }
    const handelInputChange=(e)=>{
        const {value} = e.target;
        setInputValue(value)


    }
    return (
        <>

            <form className={"flex justify-end mt-5"} onSubmit={handelSubmit}>
                <input type="text" value={inputValue} className={"input input-bordered w-full   "} onChange={handelInputChange} placeholder={"Enter your to do"}/>
                <button className={"px-6 py-0.5 rounded bg-black text-white"}  type={'submit'}>Add To Do</button>
            </form>

        </>
    );
}

export default TodoForm;
import React, {useEffect, useState} from 'react';
import TodoForm from "./todoForm.jsx";
import TodoItems from "./todoItems.jsx";

function TodoList(props) {
    const [todos,setTodos] = useState([])
    const [editData, setEditData] = useState(null)
    const [searchParams, setSearchParams] = useState("")
const handelmodifytodo =(todosone)=>{
        const newtodos = [...todos];
        const indexoflatesttodos = newtodos.findIndex((item)=>item.id === todosone.id);
        if(indexoflatesttodos === -1){
            newtodos.push(todosone)
        }else{
newtodos[indexoflatesttodos] ={
    ...newtodos[indexoflatesttodos],
    text : todosone.text
}
        }
        setTodos(newtodos)
   localStorage.setItem('todoList',JSON.stringify(newtodos))
}
const getEdittodoDate=(edit)=>{
setEditData(edit)
}
const  handelDelete=(iddelete)=>{
    let deleteid = [...todos];
    deleteid = deleteid.filter((item)=>item.id!==iddelete);
    setTodos(deleteid)
    localStorage.setItem('todoList',JSON.stringify(deleteid))

}
    useEffect(() => {
        const extractLocalStorage = JSON.parse(localStorage.getItem('todoList'));
        if(extractLocalStorage && extractLocalStorage.length){
            setTodos(extractLocalStorage)
        }
    }, []);
    const handelOnSearch=(e)=>{
        const {value} = e.target;
        setSearchParams(value.toLowerCase())

    }


    const filterTodos = todos && todos.length ? todos.filter(item => item.text.toLowerCase().includes(searchParams)) : []
    return (
        <>
            <div>
                <h3 className={"text-3xl m-3"}>Search Todos</h3>
                <input type="text" name={"search"} placeholder={"SearchTodos"} className={"input input-bordered w-full   "} onChange={handelOnSearch} value={searchParams}/>
            </div>
        <TodoForm editData={editData} getNewlyCreatedItem = {handelmodifytodo}/>
        <TodoItems getIDtobeDeleted={handelDelete} getEdittodoDate={getEdittodoDate} todos={filterTodos}/> </>
    );
}

export default TodoList;
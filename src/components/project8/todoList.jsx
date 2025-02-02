import React, {useEffect, useState} from 'react';
import TodoForm from "./todoForm.jsx";
import TodoItems from "./todoItems.jsx";

function TodoList(props) {
    const [todos,setTodos] = useState([]) // any array
    const [editData, setEditData] = useState(null) // a state
    const [searchParams, setSearchParams] = useState("")  // i think it is for search
const handelmodifytodo =(todosone)=>{  // a function for handel modifies which will be handle
        const newtodos = [...todos];  // parameter is destructured in new new todovariable
        const indexoflatesttodos = newtodos.findIndex((item)=>item.id === todosone.id); // this variable is responsible for finding the index
        if(indexoflatesttodos === -1){ // checking the condation if it is empty it will insert it
            newtodos.push(todosone) // put the value  in the destructured variable
        }else{
newtodos[indexoflatesttodos] ={ // if the search item is already in the que find the index and return only text
    ...newtodos[indexoflatesttodos],
    text : todosone.text
}
        }
        setTodos(newtodos) // destructured newtodos should be placed in Set todos
   localStorage.setItem('todoList',JSON.stringify(newtodos))  // and moreover it should be store in local storage via setitme and should be in the form of JSON
} // end of handelmodified todo
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
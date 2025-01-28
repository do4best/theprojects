import React, {useState} from 'react';
import TodoForm from "./todoForm.jsx";
import TodoItems from "./todoItems.jsx";

function TodoList(props) {
    const [todos,setTodos] = useState([])
    const [editData, setEditData] = useState(null)
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
    console.log(todos)
}
const getEdittodoDate=(edit)=>{
setEditData(edit)
}
const  handelDelete=(iddelete)=>{
        let deleteid = [...todos];
        deleteid = deleteid.filter((item)=>item.id!==iddelete);
        setTodos(deleteid)
}

    return (
        <>
        <TodoForm editData={editData} getNewlyCreatedItem = {handelmodifytodo}/>
        <TodoItems getIDtobeDeleted={handelDelete} getEdittodoDate={getEdittodoDate} todos={todos}/> </>
    );
}

export default TodoList;
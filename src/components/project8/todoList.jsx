import React, {useState} from 'react';
import TodoForm from "./todoForm.jsx";

function TodoList(props) {
    const [todos,setTodos] = useState([])
    const handelmodifytodo=(todo)=>{
        const indexoflatesttodoitem = todos.findIndex(item=>item.id === todo.id)
        console.log(indexoflatesttodoitem)
        console.log(todo)

    }
    return (
        <>
        <TodoForm getNewlyCreatedItem = {handelmodifytodo}/></>
    );
}

export default TodoList;
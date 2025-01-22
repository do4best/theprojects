import React, {useState} from 'react';
import TodoForm from "./todoForm.jsx";
import TodoItems from "./todoItems.jsx";

function TodoList(props) {
    const [todos,setTodos] = useState([])
const handelmodifytodo =(todosone)=>{
        const newtodos = [...todos];
        const indexoflatesttodos = newtodos.findIndex((item)=>item.id === todosone.id);
        if(indexoflatesttodos === -1){
            newtodos.push(todosone)
        }else{

        }
        setTodos(newtodos)
    console.log(todos)
}

    return (
        <>
        <TodoForm getNewlyCreatedItem = {handelmodifytodo}/>
        <TodoItems todos={todos}/> </>
    );
}

export default TodoList;
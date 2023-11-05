import React, { useState } from 'react'
import './todo.css';
import TodoForm from './TodoForm';
import TodoLists from './TodoLists';
const Index = () => {
    const [todo,setTodo] = useState('');
    const [todos,setTodos] = useState([]);
    const addTask = ()=>{
        if(todo !== ''){
            setTodos([...todos,todo]);
            setTodo('');
        }
    }
    const deleteTask = (deletedItem)=>{
        const newTodos = todos.filter((todo)=>{
            return deletedItem !== todo;
        });
        setTodos(newTodos);
    }
  return (
    <div>
        <h1>TO DO APP</h1>
        <TodoForm addTask={addTask} todo = {todo} setTodo= {setTodo}/>
        <TodoLists todos={todos} setTodos={setTodos} deleteTask={deleteTask}/>
    </div>
  )
}

export default Index

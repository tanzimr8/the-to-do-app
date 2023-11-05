import React, { useState } from 'react'
import './todo.css';
import TodoForm from './TodoForm';
import TodoLists from './TodoLists';
const Index = () => {
    const [isEmpty,setIsEmpty] = useState(false);
    const [todo,setTodo] = useState({
        id:'',
        title:'',
        isCompleted: false,
        priority: ''
    });
    const [todos,setTodos] = useState([]);
    const handleChange = (e)=>{
        setTodo({
            ...todo,
            id: new Date().getDate(),
            title: e.target.value
        });
    }
    const addTask = (e)=>{
        if(todo.title !== ''){
            setTodos([...todos,todo]);
            setTodo({
                ...todo,
                title: ''
            });
            setIsEmpty(false);
        }
        else{
            setIsEmpty(true);
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
        <h1>Here is my Typical ToDo App</h1>
        <TodoForm isEmpty={isEmpty} addTask={addTask} handleChange={handleChange} todo = {todo} setTodo= {setTodo}/>
        <TodoLists todos={todos} setTodos={setTodos} deleteTask={deleteTask}/>
    </div>
  )
}

export default Index

import React, { useState } from 'react'
import './todo.css'
const Index = () => {
    const [todo,setTodo] = useState('');
    const [todos,setTodos] = useState([]);
    const addTask = ()=>{
        if(todo !== ''){
            setTodos([...todos,todo])
        }
    }
  return (
    <div>
      <h1>TO DO APP</h1>
        {/* Todo form */}
        <div className="input-wrapper">
            <input type="text" name='todo' placeholder='Add a new task' value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
            <button className='add-button' onClick={addTask}>ADD TASK</button>
        </div>
        {/* SHOW LIST OF TASKS */}
        {todos.length > 0 ?
        (<ul className="todo-list">
            {todos.map((todo,index)=>{
                <div className="todo">
                    <li key={index}>{todo}</li>
                    <button className="delete-button">Delete task</button>
                </div>
            })}
        </ul>)
        :
        (<div className="empty">
            <p>No task to complete</p>
        </div>)}
    </div>
  )
}

export default Index

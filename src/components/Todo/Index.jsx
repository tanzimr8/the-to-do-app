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
      {/* Todo form
      tooo add button
      todo task lists
      todo complet function
      show completed tasks */}
    {/* Todo form */}
    <div className="input-wrapper">
        <input type="text" name='todo' placeholder='Add a new task' value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
        <button className='add-button' onClick={addTask}>ADD TASK</button>
    </div>
    </div>
  )
}

export default Index

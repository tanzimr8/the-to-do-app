import React, { useState } from 'react'
import './todo.css'
const Index = () => {
    const [todo,setTodo] = useState();
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
        <button className='add-button' type='submit'>ADD TASK</button>
    </div>
    </div>
  )
}

export default Index

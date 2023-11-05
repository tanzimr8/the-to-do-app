import React from 'react'

const TodoForm = ({todo,setTodo,addTask}) => {
  return (
    <div className="input-wrapper">
        <input type="text" name='todo' placeholder='Add a new task' value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
        <button className='add-button' onClick={addTask}>ADD TASK</button>
    </div>
  )
}

export default TodoForm

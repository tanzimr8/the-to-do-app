import React from 'react'

const TodoForm = ({todo,setTodo,addTask,handleChange,isEmpty}) => {
  return (
    <>
    <div className="input-wrapper">
        <input style={isEmpty ? {borderColor: '#BC412B'} : {}} type="text"  name='todo' placeholder='Add a new task' value={todo.title} onChange={(e)=>{handleChange(e)}}/>
        <button className='add-button' onClick={addTask}>ADD TASK</button>
    </div>
    {isEmpty && <h3 style={{color:'#BC412B', marginTop: '-2.5rem',marginBottom: '2.5rem'}}>Please add a task</h3>}

    </>
  )
}

export default TodoForm

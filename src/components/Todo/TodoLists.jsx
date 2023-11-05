import React from 'react'

const TodoLists = ({todos,setTodos,deleteTask}) => {
  return (
    todos.length > 0 ?
        (<ul className="todo-list">
            {todos.map((todo,index)=>{
                return (<div className="todo">
                    <li key={index + new Date().getDate()}>{todo}</li>
                    <button className="delete-button" onClick={()=>{deleteTask(todo)}}>Delete task</button>
                </div>)
            })}
        </ul>)
        :
        (<div className="empty">
            <p>No task to complete</p>
        </div>)
  )
}

export default TodoLists

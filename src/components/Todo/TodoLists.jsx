import React from 'react'

const TodoLists = ({todos,setTodos,deleteTask}) => {
  return (
    todos.length > 0 ?
        (<ul className="todo-list">
            {todos.map((todo,index)=>{
                return (<div className="todo">
                    <div className="tast-details">
                        <li key={todo.id + new Date().getDate()}>{todo.title}</li>
                        <button className="delete-button" onClick={()=>{deleteTask(todo)}}>DELETE</button>
                    </div>
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

import React from 'react'

export default function TodoList({todos,setTodos}) {
  return (
    <div>
        {todos.map((todo)=>(
            <li className='todo-list' key={todo.id}>
                <input type={text} value={todo.title} className="list" onChange={(event)=>event.preventDefault()}/>
            </li>
        ))}
    </div>
  )
}

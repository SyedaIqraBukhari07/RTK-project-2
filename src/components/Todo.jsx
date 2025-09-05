import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/TodoSlice'
import { updateTodo } from '../features/todo/TodoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <div>Todos</div>
    <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div >{todo.text}</div>
            <button onClick={() => dispatch(removeTodo(todo.id))} >
              Remove it 
               
            </button>
            <button onClick={() => dispatch(updateTodo(todo.id))}>
  Edit
</button>

          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
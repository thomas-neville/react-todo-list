import React from 'react'
import Todo from './Todo'

export default function ToDoList({ todos }) {
  return (
      todos.map(todo => {
        // key just needs to be unique, naming not linked to any part of the component
        // key will only rerender as needed, being more efficient
        return <Todo key={todo.id} todo={todo}/>
      })
  )
}

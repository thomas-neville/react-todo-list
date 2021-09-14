import React from 'react'

export default function ToDoList({ todos }) {
  return (
    <div>
      My ToDo List:
      {todos.length}
    </div>
  )
}

import React, { useState } from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [items, setItems] = useState([])

    return (
        <div>
            <h1>To-Do-List</h1>
            <h3>오늘의 계획은 무엇인가요?</h3>
            <TodoForm />
        </div>
    )
}

export default TodoList

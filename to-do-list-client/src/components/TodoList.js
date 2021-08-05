import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        // todo:현재추가todo, todos:이전추가todos
        // console.log(todo, ...todos)
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>To-Do-List</h1>
            <h3>오늘의 계획은 무엇인가요?</h3>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}
            />
        </div>
    )
}

export default TodoList

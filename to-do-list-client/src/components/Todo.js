import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { TiEdit } from 'react-icons/ti'
import { BiTrash } from 'react-icons/bi'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <>
            <div
                className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                key={index}
            >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
                </div>

                <div className='arr1'>
                    <div className='ref'>ref</div>
                </div>
                <div className='date_icon'>
                    <div className='arr2'>
                        <div className='createdAt'>작성일: </div>
                        <div className='updatedAt'>최근 수정일: </div>
                    </div>
                
                    <div className='icons'>
                        <TiEdit
                        className='edit-icon'
                        onClick={() => setEdit({ id: todo.id, value: todo.text })}
                        />
                        <BiTrash
                        className='delete-icon'
                        onClick={() => removeTodo(todo.id)}
                        />
                    </div>
                </div>
            </div>
        </>
    ))
}

export default Todo

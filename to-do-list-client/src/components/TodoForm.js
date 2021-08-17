import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)
    
    useEffect(() => {
        inputRef.current.focus()
    })
    
    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? ( 
            <>
            <input
                className="todo-input edit"
                type="text"
                name="text"
                placeholder="편집하고 싶은 내용을 입력해주세요!"
                value={input}
                onChange={handleChange}
                ref={inputRef}
            />
                    <button className="todo-button edit">Edit</button>
                </>
            ) : (
            <>
            <input
                className="todo-input"
                type="text"
                name="text"
                placeholder="오늘 할 일을 입력하세요!"
                value={input}
                onChange={handleChange}
                ref={inputRef}
            />
                        <button className="todo-button">Enter</button>
            </>
            )}

        </form>
    )
}

export default TodoForm

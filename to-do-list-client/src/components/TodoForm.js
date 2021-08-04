import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')
    
    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onsubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form className='to-do-form' onsubmit={handleSubmit}>
            <input
                className="to-do-input"
                type="text"
                name="text"
                placeholder="오늘 할 일을 입력하세요!"
                value={input}
                onChange = {handleChange}
            />
            <button className="to-do-button">Enter</button>
        </form>
    )
}

export default TodoForm

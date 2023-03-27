import React, { useState, useEffect, useRef } from 'react'

type TodoFormProps = {
    [x: string]: any;
    id: number,
    text: string,
    isComplete: boolean
}

const TodoForm = (props: TodoFormProps) => {

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect (() => {
        inputRef.current!.focus()
    })

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            isComplete: false,
        });

        setInput('')
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input type='text' placeholder='Update todo' value={input} name='text' className='todo-input edit' onChange={handleChange} ref={inputRef}/>
                    <button className='todo-button edit'>Update</button>
                </>
            ) : (
                <>
                    <input type='text' placeholder='Add a todo' value={input} name='text' className='todo-input' onChange={handleChange} ref={inputRef}/>
                    <button className='todo-button'>Add todo</button>
                </>
            )}
            
        </form>
    )
}

export default TodoForm
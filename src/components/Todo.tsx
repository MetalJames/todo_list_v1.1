import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

type TodosProps = {
    todos: string[],
    completeTodo: any,
    updateTodo: any,
    removeTodo: any,
}

const Todo = (props: TodosProps) => {

    const { todos, completeTodo, updateTodo, removeTodo } = props;

    const [edit, setEdit] = useState<any>({
        id: null,
        value: '',
        isComplete: false,
    });

    const submitUpdate = (value: any) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: '',
            isComplete: false,
        })
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} id={0} text={''} isComplete={false} />
    }

    return (
        <div>
            {todos.map((todo: any, index: number) => (
            <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className='icons'>
                    <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icon' />
                    <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit-icon' />
                </div>
            </div>
        ))}
        </div>
    )
    
}

export default Todo
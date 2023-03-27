import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';


const TodoList = () => {

    const [todos, setTodos] = useState<any>([]);
    
    const addTodo = (todo: any) => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [...todos, todo];

        setTodos(newTodos);
    }

    const completeTodo = (id: number) => {
        let updatedTodos = [...todos].map((todo) => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        });

        setTodos(updatedTodos);
    };

    const updateTodo = (todoId: any, newValue: { text: string; }) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }

        setTodos((prev: any[]) => prev.map((item: { id: any; }) => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = (id: number) => {
        const updatedTodos = todos.filter((todo: { id: number; }) => id !== todo.id)
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm id={0} text={''} onSubmit={addTodo} isComplete/>
            <Todo todos={todos} completeTodo={completeTodo} updateTodo={updateTodo} removeTodo={removeTodo} />
        </div>
    )
}

export default TodoList
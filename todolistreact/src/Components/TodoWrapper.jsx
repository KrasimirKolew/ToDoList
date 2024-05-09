import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
uuidv4();

export const TodoWrapper = () => {

    const [todos, setTodos] = useState([]);

    //add
    const addTodo = (todo) => {
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]);
    }

    //dell
    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

    //compleate
    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    //edit
    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    }

    const addTodo = todo => {

        setTodos([...todos, { id: uuidv4(), task: todo,
            completed: false, isEditing: false}])

        console.log(todos);
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...
            todo, completed: !todo.completed} : todo ))
    }

    return (
        <div className='TodoWrapper'>
        <h1>Get Things Done!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <Todo task={todo} key={index} toggleComplete={toggleComplete} />
            ))}
            
        </div>
    )
}
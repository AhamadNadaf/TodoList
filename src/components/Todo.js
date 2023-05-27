import React, { useState } from 'react';
import './todo.css'

const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleChange = (event) => {
        setNewTodo(event.target.value);
    };

    const handleAddTask = () => {
        if (newTodo.trim() !== '') {
            setTodo([...todo, { id: Date.now(), text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const handleDeleteTodo = (id) => {
        setTodo(todo.filter((data) => data.id !== id));
    };

    const handleToggleComplete = (id) => {
        setTodo(
            todo.map((data) => {
                if (data.id === id) {
                    return { ...data, completed: !data.completed };
                }
                return data;
            })
        );
    };

    const handleCompleteTodo = (id) => {
        handleToggleComplete(id)
    }


    return (
        <div className="todo-list-container">
            <h1>Todo List</h1>
            <div className="add-todo-container">
                <input
                    type="text"
                    placeholder="Add a new todo"
                    value={newTodo}
                    onChange={handleChange}
                />
                <button className='add-button' onClick={handleAddTask}>Add</button>
            </div>
            <ul className="todo-list">
                {todo.map((data) => (
                    <li key={data.id} className={data.completed ? 'completed' : ''}>
                        <input
                            type="checkbox"
                            checked={data.completed}
                            onChange={() => handleToggleComplete(data.id)}
                        />
                        <span>{data.text}</span>
                        <button className='deleteButton' onClick={() => handleDeleteTodo(data.id)}>Delete</button>
                        {   
                        data.completed === true ? (
                        <button className={data.completed === true ? 'button-completed' : 'button-not-completed'} onClick={() => handleCompleteTodo(data.id)}>Mark As Not Completed</button>) : 
                        (<button className={data.completed === true ? 'button-completed' : 'button-not-completed'} onClick={() => handleCompleteTodo(data.id)}>Mark As completed</button>)

                        }
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
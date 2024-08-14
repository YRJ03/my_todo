import React, { useState } from 'react';
import './App.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
    setError(''); // Clear error message when user starts typing
  };

  const handleAddTodo = () => {
    if (newTodo.trim() === '') {
      setError('Todo cannot be empty');
      return;
    }

    if (todos.includes(newTodo.trim())) {
      setError('Todo already exists');
      return;
    }

    setTodos([...todos, newTodo.trim()]);
    setNewTodo('');
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      {error && <p className="error">{error}</p>}
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span>{index + 1}. {todo}</span>
            <button onClick={() => handleRemoveTodo(index)} className="remove-button">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

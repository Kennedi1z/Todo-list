import TodoForm from './TodoForm.jsx';
import { useState } from 'react';
import TodoList from './TodoList.jsx';
import './App.css'

 const todos = [
    { id: 1, title: 'Sweep the floor' },
    { id: 2, title: 'Mop the kitchen' },
    { id: 3, title: 'Take out the trash' }
];

function App() {
  const [todoList, setTodoList] = useState([]);
    const addTodo = (todoTitle) => {
      const newTodo = {
        id:Date.now(),
        title: todoTitle,
      };
      setTodoList((prev) => [...newTodo, ...prev]);
      }
  return (
    <div>
      <h1>My Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;

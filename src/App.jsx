
import TodoForm from './TodoForm.jsx';
import { useState } from 'react';
import TodoList ,{todos} from './TodoList.jsx';
import './App.css'

function App() {
  const [todoList, setTodoList] = useState(todos);

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoForm />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;

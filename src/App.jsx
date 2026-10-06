import './App.css'

function App() {
  const todoList = [
    { id: 1, text: 'Do the dishes' },
    { id: 2, text: 'Sweep the floor' },
    { id: 3, text: 'Mop the kitchen' },
  ]

  return (
    <div>
      <h1>My Todo List</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

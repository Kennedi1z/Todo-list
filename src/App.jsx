import './App.css'

function App() {
  const todoList = [
    { id: 1, text: 'Sweep the floor' },
    { id: 2, text: 'Mop the kitchen' },
    { id: 3, text: 'Take out the trash' },
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

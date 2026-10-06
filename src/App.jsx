import './App.css'

function App() {
  const todoList = [
    { id: 1, title: 'Do the dishes' },
    { id: 2, title: 'Sweep the floor' },
    { id: 3, title: 'Mop the kitchen' },
  ]

  return (
    <div>
      <h1>My Todo List</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

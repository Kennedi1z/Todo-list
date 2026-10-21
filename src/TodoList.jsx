function TodoList(){
  const todoList = [
    { id: 1, text: 'Sweep the floor' },
    { id: 2, text: 'Mop the kitchen' },
    { id: 3, text: 'Take out the trash' },
  ];

  return (

      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
  );
}


export default TodoList;
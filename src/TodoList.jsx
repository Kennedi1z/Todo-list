import TodoListItem from './TodoListItem.jsx';


export const todos = [
    { id: 1, title: 'Sweep the floor' },
    { id: 2, title: 'Mop the kitchen' },
    { id: 3, title: 'Take out the trash' }
];

function TodoList({ todoList }) {
    return (
        <ul>
            {todoList.map((todo) => (
                <TodoListItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default TodoList;
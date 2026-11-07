import{ useRef } from 'react';

const TodoForm = ({ onAddTodo }) => {
    const inputRef = useRef(null);

    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.todoTitle.value.trim();

        if(!todoTitle) return;
        onAddTodo(todoTitle);
        event.target.reset();
        console.log(todoTitle);
        inputRef.current.focus();
    

    };    
    return(
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Todo</label>
            <input ref={inputRef} type="text" id="todoTitle" name="todoTitle" />
            <button type="submit">Add Todo</button>
        </form>

    );
};
export default TodoForm;
import{ useRef } from 'react';

const TodoForm = ({ onAddTodo }) => {
    const inputRef = useRef(null);

    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.form.todoTitle.value.trim();
        console.log(todoTitle);
        inputRef.current.focus();
        console.log(inputRef);

    };    
    return(
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Todo</label>
            <input ref={inputRef} type="text" id="todoTitle" />
            <button type="submit" onClick={handleAddTodo}>Add Todo</button>
        </form>

    );
};
export default TodoForm;
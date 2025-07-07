export function ToDoItem({completed, id, title, deleteTodo, toggleTodo}) {

    return(
        <li key={id}>
            <label>
            <input 
                checked={completed} 
                type="checkbox"
                onChange={e => toggleTodo(id, e.target.checked)}
                
                />
            {title}
            </label>
            <button 
            className="btn btn-danger"
            onClick={ () => deleteTodo(id)}>Delete</button>
        </li>
    )
}
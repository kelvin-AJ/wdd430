import { ToDoItem } from "./ToDoItem"
export function TodoList({todos, toggleTodo, deleteTodo}) {

    return (
        <>
        <h1 className="header">Todo List</h1>
        <ul className="list">
            {todos.length == 0 && "No Todos"}
            {
            todos.map(todo => <ToDoItem 
                {...todo} 
                toggleTodo={toggleTodo} 
                deleteTodo={deleteTodo}
                
                />)
            }
      </ul>
      </>
    )
}
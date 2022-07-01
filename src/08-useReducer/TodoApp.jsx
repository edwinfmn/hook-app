import { useTodo } from "../hooks";
import { TodoAdd, TodoList } from "./";


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleRemoveTodo, handleToggleTodo } = useTodo();

    return (
        <>
            <h1>TodoApp ({ todosCount })<small>, pendientes: { pendingTodosCount }</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        onRemoveTodo={ handleRemoveTodo }
                        onToggleTodo={ handleToggleTodo } />  
                </div>
                <div className="col-5">
                    {/* TodoAdd onNewTodo( todo )*/}
                    {/* { id:new Date()..., description: '', done: false}*/}
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd 
                        onNewToDo={ handleNewTodo } />
                </div>
            </div>
        </>
    )
}

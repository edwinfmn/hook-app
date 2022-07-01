import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewToDo }) => {

    const { formState, onInputChange, onResetForm, description } = useForm({
        description: ''
    });

    const onSubmitForm = (e) => {
        e.preventDefault();
        if ( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        };

        onNewToDo( newTodo );
        onResetForm();
    }

    return (
        <form onSubmit={ onSubmitForm } >
            <input 
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange } />

            <button 
                type="submit"
                className="btn btn-outline-primary mt-2">
                Agregar
            </button>
        </form>
    )
}

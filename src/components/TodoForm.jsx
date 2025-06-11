//Components
import { useState } from 'react';


const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!value || !category) {
            return;
        };

        const todo = {
            id: Math.floor(Math.random()) * 1000,
            text: value,
            category: category,
            isCompleted: false
        };

        // Call the addTodo function passed as a prop
        addTodo(todo);

        // Reset the form fields
        setCategory('');
        setValue('');
    };

    return (
        <div className="todo-form">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" name="" placeholder="Digite o título" value={value} onChange={(e) => setValue(e.target.value)} />
                </label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Trabalho">Trabalho</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm
//Components
import { useState, useEffect } from 'react'
import Todo from './components/Todo.jsx'
import TodoForm from './components/TodoForm.jsx';
import Search from './components/Search.jsx';
import Filter from './components/Filter.jsx';

//Css
import './App.css'


function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Estudar React', category: "Estudos", isCompleted: false },
    { id: 2, text: 'Fazer exercícios', category: "Pessoal", isCompleted: false },
    { id: 3, text: 'Ler um livro', category: "Estudos", isCompleted: false },
    { id: 4, text: 'Ir ao mercado', category: "Pessoal", isCompleted: false },
    { id: 5, text: 'Assistir a um filme', category: "Pessoal", isCompleted: true },
    { id: 6, text: 'Criar funcionalidade X no sistema', category: "Trabalho", isCompleted: true }
  ]
  );

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('asc');


  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem('todos'));
  //   if (storedTodos) {
  //     setTodos(storedTodos);
  //   }
  // }, []);


  const completeTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
      <div className='todo-list'>
        {todos
          .filter((todo) => filter === 'all' ? true : filter === 'completed' ? todo.isCompleted : !todo.isCompleted)
          .filter((todo) => todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          .sort((a, b) => sort === 'asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
          .map(todo => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App

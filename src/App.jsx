import {useState} from 'react';
import ToDoForm from './components/ToDoForm/ToDoForm';
import TodoList from './components/TodoList/TodoList';
import ContainerForm from './components/ContainerForm/ContainerForm';


function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos'))||[]);

  const addTodo = (task) => {
    const newTodos = [...todos, task];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const deleteTodoAll = () => {
    setTodos([]);
    localStorage.setItem('todos', JSON.stringify([]));
  }

  return (
    <ContainerForm>
      <ToDoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} deleteTodoAll={deleteTodoAll} />
      {
        console.log(JSON.parse(localStorage.getItem('todos')))
      }
    </ContainerForm>
  );
}

export default App;


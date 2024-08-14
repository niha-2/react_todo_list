import { ChangeEvent, useContext, useState } from 'react'
import './App.css'
import { InputTodo } from './components/InputTodo'
import { Todo } from './components/types/Todo';
import { TodoItem } from './components/TodoItem';
import { TodoState } from './components/TodoState';
import { TodoContext } from './providers/TodoProvider';

function App() {
  const [todoText, setTodoText] = useState('');

  const {todos, setTodos} = useContext(TodoContext);

  const onChangeTodoText = (event: ChangeEvent<HTMLInputElement>): void => setTodoText(event.target.value);

  const onClickAdd = (): void => {
    if (todoText === '') return;
    const newTodo: Todo = {
      id: todos.length + 1,
      title: todoText,
      completed: false
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodoText('');
  }



  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />
      <div>
        <ul>
        {todos.map((todo: Todo) =>
          <TodoItem key={todo.id} todo={todo} />
        )}
        </ul>
      </div>
      <TodoState todos={todos} />
    </>
  )
}

export default App

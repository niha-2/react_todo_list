import { ChangeEvent, useContext, useRef, useState } from 'react'
import './App.css'
import { InputTodo } from './components/InputTodo'
import { Todo } from './components/types/Todo';
import { TodoItem } from './components/TodoItem';
import { TodoState } from './components/TodoState';
import { TodoContext } from './providers/TodoProvider';

function App() {
  const [todoText, setTodoText] = useState('');

  const {todos, setTodos} = useContext(TodoContext);
  const nextId = useRef(1);

  const onChangeTodoText = (event: ChangeEvent<HTMLInputElement>): void => setTodoText(event.target.value);

  const onClickAdd = (): void => {
    if (todoText === '') return;
    const newTodo: Todo = {
      id: nextId.current,
      title: todoText,
      completed: false
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodoText('');
    nextId.current ++;
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

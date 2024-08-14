import { ChangeEvent, useState } from 'react'
import './App.css'
import { InputTodo } from './components/InputTodo'
import { Todo } from './components/types/Todo';
import { TodoItem } from './components/TodoItem';
import { TodoState } from './components/TodoState';

function App() {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState<Array<Todo>>([]);

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

  const onChangeCompleted = (id: number): void => {
    const newTodos = todos.map((todo) =>
      todo.id !== id ? todo : {...todo, completed: !todo.completed}
    )
    setTodos(newTodos);
  }

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />
      <div>
        <ul>
        {todos.map((todo: Todo) =>
          <TodoItem key={todo.id} completed={todo.completed} todoTitle={todo.title} onChangeCompleted={() => onChangeCompleted(todo.id)} />
        )}
        </ul>
      </div>
      <TodoState todos={todos} />
    </>
  )
}

export default App

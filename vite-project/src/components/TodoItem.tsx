import { ChangeEvent, FC, useContext, useState } from "react";
import { TodoContext } from "../providers/TodoProvider";
import { Todo } from "./types/Todo";

type Props = {
  todo: Todo;
}

export const TodoItem: FC<Props> = (props) => {
  const {todo} = props;
  const {todos, setTodos} = useContext(TodoContext);

  const [updateTodoTitle, setUpdateTodoTitle] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const onChangeUpdateTodoText = (event: ChangeEvent<HTMLInputElement>): void => setUpdateTodoTitle(event.target.value);

  const onChangeCompleted = (id: number): void => {
    const newTodos = todos.map((todo) =>
      todo.id == id ? {...todo, completed: !todo.completed} : todo
    )
    setTodos(newTodos);
  }

  const onClickUpdate = (id: number): void => {
    const updateTodos = todos.map((todo) =>
      todo.id == id ? {...todo, title: updateTodoTitle} : todo
    )
    setTodos(updateTodos);
    setUpdateTodoTitle('');
    setIsEditing(!isEditing);
  }

  const onClickEdit = (): void => {
    setIsEditing(!isEditing);
  }

  const onClickDelete = (): void => {
    if(window.confirm('本当によろしいですか？')) {
      const deletedTodos = todos.filter((td) =>
        td.id !== todo.id
      )
      setTodos(deletedTodos);
    }
  }

  return (
    <li style={{display: 'flex', alignItems: "center"}}>
      <input type="checkbox" checked={todo.completed} onChange={() => onChangeCompleted(todo.id)} />
      {isEditing ? (
        <>
          <input type="text" value={updateTodoTitle} onChange={onChangeUpdateTodoText} />
          <button onClick={() => onClickUpdate(todo.id)}>保存</button>
        </>
      ) : (
        <>
          {todo.completed ? (<s>{todo.title}</s>) : (<span>{todo.title}</span>)}
          <button onClick={onClickEdit}>編集</button>
          <button onClick={onClickDelete}>削除</button>
        </>
      )}
    </li>
  )
}

import { FC } from "react";
import { Todo } from "./types/Todo";

type Props = {
  todos: Array<Todo>;
}

export const TodoState: FC<Props> = (props) => {
  const {todos} = props;

  return (
    <p>すべてのタスク：{todos.length} 完了済み：{todos.filter((todo) => todo.completed).length} 未完了：{todos.filter((todo) => !todo.completed).length}</p>
  )
}

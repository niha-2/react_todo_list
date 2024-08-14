import { FC } from "react";

type Props = {
  completed: boolean;
  todoTitle: string;
  onChangeCompleted: () => void;
}

export const TodoItem: FC<Props> = (props) => {
  const {completed, todoTitle, onChangeCompleted} = props;

  return (
    <li style={{display: 'flex', alignItems: "center"}}>
        <input type="checkbox" checked={completed} onChange={onChangeCompleted} />{completed ? <s>{todoTitle}</s> : <span>{todoTitle}</span>}
        {/* <button onClick={onClickEdit}>編集</button>
        <button onClick={onClickDelete}>削除</button> */}
    </li>
  )
}

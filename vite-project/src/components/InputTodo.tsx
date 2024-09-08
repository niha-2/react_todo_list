import { ChangeEventHandler, FC } from "react";

type Props = {
  todoText: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick: () => void;
}

export const InputTodo: FC<Props> = (props) => {
  const {todoText, onChange, onClick} = props;
  return (
    <div>
      <input type="text" placeholder="TODOを入力" value={todoText} onChange={onChange}  />
      <button onClick={onClick}>保存</button>
    </div>
  )
}

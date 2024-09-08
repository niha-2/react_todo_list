import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Todo } from "../components/types/Todo";

type TodoContextType = {
  todos: Array<Todo> | [];
  setTodos: Dispatch<SetStateAction<Array<Todo> | []>>
}

export const TodoContext = createContext<TodoContextType>({} as TodoContextType);

export const TodoProvider = (props: {children: ReactNode}) => {
  const {children} = props;
  const [todos, setTodos] = useState<Array<Todo> | []>([]);

  return (
    <TodoContext.Provider value={{todos, setTodos}}>
      {children}
    </TodoContext.Provider>
  )

}

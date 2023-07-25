import { createContext } from "react";
import { FiltersValueType } from "./components/footer/filter";
import { ITodoItem } from "./components/todos/item";

interface IContext {
    filter: FiltersValueType;
    setFilter: (filter: FiltersValueType) => void;
    todos: ITodoItem[];
    setTodos: (todos: ITodoItem[]) => void;
}

const TodoContext = createContext<IContext>({} as IContext);

export default TodoContext;
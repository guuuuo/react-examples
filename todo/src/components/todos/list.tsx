import React, { useContext } from "react";

import TodoContext from "../../todoContext";
import TodoItem, { ITodoItem } from "./item";
import { FILTERS } from "../footer";

import './list.less';

interface ITodoListProps {
    data: ITodoItem[];
}

export default function TodoList() {
    const { todos, filter } = useContext(TodoContext);

    const visibleTodos = todos.filter((todo) => {
        switch (filter) {
            case FILTERS.Active:
                return todo.completed === false;
            case FILTERS.Completed:
                return todo.completed === true;
            default:
                return true;
        }
    });

    return (
        <ul className="todo-list">
            {visibleTodos.map((todo) => (
                <TodoItem key={todo.id} data={todo} />
            ))}
        </ul>
    )
}
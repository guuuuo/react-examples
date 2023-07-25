import React from "react";
import TodoItem, { ITodoItem } from "./item";

import './list.less';

interface ITodoListProps {
    data: ITodoItem[];
}

export default function TodoList(props: ITodoListProps) {
    const { data } = props;

    return (
        <ul className="todo-list">
            {data.map(({ id, text, completed }) => (
                <TodoItem key={id} text={text} completed={completed} />
            ))}
        </ul>
    )
}
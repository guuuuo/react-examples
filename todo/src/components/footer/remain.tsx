import React, { useContext } from "react";
import { Typography } from "antd";
import TodoContext from "../../todoContext";

const Title = Typography.Title;

export default function RemainingTodos() {

    const { todos } = useContext(TodoContext);

    const count = todos.reduce((acc, prev) => {
        return prev.completed ? acc : acc + 1;
    }, 0);

    const suffix = count === 1 ? '' : 's';

    return (
        <div className="todo-count">
            <Title level={5}>Remaining Todos</Title>
            <strong>{count}</strong> item{suffix} left
        </div>
    )

}
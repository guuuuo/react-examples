import React from "react";
import { Typography } from "antd";

const Title = Typography.Title;

interface IRemainingTodosProps {
    count: number;
}

export default function RemainingTodos({ count }: IRemainingTodosProps) {
    const suffix = count === 1 ? '' : 's';

    return (
        <div className="todo-count">
            <Title level={5}>Remaining Todos</Title>
            <strong>{count}</strong> item{suffix} left
        </div>
    )

}
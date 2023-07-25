import React, { useContext } from "react";
import { Typography, Button } from "antd";
import TodoContext from "../../todoContext";

const Title = Typography.Title;

export default function Actions() {

    const { todos, setTodos } = useContext(TodoContext);

    return (
        <>
            <Title level={5}>Actions</Title>
            <Button
                className="btn-action"
                size="small"
                onClick={() => {
                    const newTodos = todos.map((todo) => {
                        todo.completed = true;
                        return todo;
                    });
                    setTodos(newTodos);
                }}>
                Mark All completed
            </Button>
            <Button
                className="btn-action"
                size="small"
                onClick={() => {
                    const newTodos = todos.filter((todo) => todo.completed === false);
                    setTodos(newTodos);
                }}>
                Clear Completed
            </Button>
        </>
    )
}

import React, { useContext } from "react";
import { Checkbox, Row, Col } from "antd";
import { DeleteFilled } from "@ant-design/icons";

import TodoContext from "../../todoContext";

import './item.less';

export interface ITodoItem {
    id: number;
    text: string;
    completed: boolean;
}

interface IProps {
    data: ITodoItem
}

export default function TodoItem(props: IProps) {
    const { id, text, completed } = props.data;
    const { todos, setTodos } = useContext(TodoContext);

    const toggleCompleted = () => {
        const todoItem = todos.find((todo) => todo.id === id);
        if (todoItem) {
            todoItem.completed = !todoItem.completed;
        }
        setTodos([...todos]);
    }

    const remove = () => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    }

    return (
        <li className="todo-item">
            <Row>
                <Col span={2} className="toggle-status">
                    <Checkbox checked={completed} onClick={toggleCompleted} />
                </Col>
                <Col span={20} className="todo-text">
                    {text}
                </Col>
                <Col span={2} className="delete-todo">
                    <DeleteFilled className="delete-todo-icon" onClick={remove} />
                </Col>
            </Row>
        </li>
    )

}
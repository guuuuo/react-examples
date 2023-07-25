import React from "react";
import { Checkbox, Row, Col } from "antd";
import { DeleteFilled } from "@ant-design/icons";

import './item.less';

export interface ITodoItem {
    id: number;
    text: string;
    completed: boolean;
}

export default function TodoItem(props: Pick<ITodoItem, 'text' | 'completed'>) {
    const { text, completed } = props;

    return (
        <li className="todo-item">
            <Row>
                <Col span={2} className="toggle-status">
                    <Checkbox checked={completed} />
                </Col>
                <Col span={20} className="todo-text">
                    {text}
                </Col>
                <Col span={2} className="delete-todo">
                    <DeleteFilled className="delete-todo-icon" />
                </Col>
            </Row>
        </li>
    )

}
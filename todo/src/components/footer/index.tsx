import React from "react";
import { Row, Col } from "antd";

import Actions from './actions';
import RemainingTodos from "./remain";
import Filter, { FiltersValueType, FILTERS } from "./filter";

import './index.less';

interface IFooterProps {
    todosRemaining: number;
    filter: FiltersValueType;
}

export default function Footer(props: IFooterProps) {
    const { todosRemaining, filter } = props;

    return (
        <footer className="todo-footer">
            <Row>
                <Col span={8} className="actions">
                    <Actions />
                </Col>
                <Col span={8}>
                    <RemainingTodos count={todosRemaining} />
                </Col>
                <Col span={8}>
                    <Filter filter={filter} />
                </Col>
            </Row>
        </footer>
    )
}

export { FILTERS };
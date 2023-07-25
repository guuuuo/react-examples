import React from "react";
import { Row, Col } from "antd";

import Actions from './actions';
import RemainingTodos from "./remain";
import Filter, { FiltersValueType, FILTERS } from "./filter";

import './index.less';

export default function Footer() {
    return (
        <footer className="todo-footer">
            <Row>
                <Col span={8} className="actions">
                    <Actions />
                </Col>
                <Col span={8}>
                    <RemainingTodos />
                </Col>
                <Col span={8}>
                    <Filter />
                </Col>
            </Row>
        </footer>
    )
}

export { FILTERS };
import React from "react";
import { Typography } from "antd";

import Header from "./components/header";
import TodoList from "./components/todos/list";
import Footer, { FILTERS } from "./components/footer";

import defaultTotoData from './data';

import './App.css';

const Title = Typography.Title;

export default function App() {
  const todosRemaining = defaultTotoData.reduce((acc, prev) => {
    return prev.completed ? acc : acc + 1;
  }, 0);

  return (
    <div className="todo-container">
      <Title level={2}>Todos</Title>
      <div className="todo">
        <Header />
        <TodoList data={defaultTotoData} />
        <Footer todosRemaining={todosRemaining} filter={FILTERS.All} />
      </div>
    </div>
  )
}
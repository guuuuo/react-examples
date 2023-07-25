import React, { useState, useEffect } from "react";
import { Typography } from "antd";

import TodoContext from "./todoContext";
import Header from "./components/header";
import TodoList from "./components/todos/list";
import { ITodoItem } from "./components/todos/item";
import Footer, { FILTERS } from "./components/footer";
import { FiltersValueType } from "./components/footer/filter";

import defaultTotoData from './data';

import './App.css';

const Title = Typography.Title;

function getTodoData(): Promise<ITodoItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(defaultTotoData);
    }, 300)
  })
}

export default function App() {

  const [filter, setFilter] = useState<FiltersValueType>(FILTERS.All);

  const [todos, setTodos] = useState<ITodoItem[]>([]);

  useEffect(() => {
    getTodoData().then(setTodos);
  }, []);

  return (
    <TodoContext.Provider
    value = {{
        filter,
        setFilter,
        todos,
        setTodos
    }}>
      <div className="todo-container">
        <Title level={2}>Todos</Title>
        <div className="todo">
          <Header />
          <TodoList />
          <Footer />
        </div>
      </div>
    </TodoContext.Provider>
  )
}
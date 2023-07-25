import React, { useState, useEffect, useContext } from "react";
import { Input } from "antd";
import TodoContext from "../../todoContext";
import { ITodoItem } from "../todos/item";

export default function Header() {
    const [input, setInput] = useState('');
    const { todos, setTodos } = useContext(TodoContext);

    const addTodo = () => {
        if (input !== '') {
            const lastTodoId = todos.length > 0 ? todos[todos.length - 1].id : 0;

            const newTodo: ITodoItem = {
                id: lastTodoId + 1,
                text: input,
                completed: false
            };

            setTodos([...todos, newTodo]);

            setInput('');
        }
    }

    return (
        <Input
            className="new-todo"
            placeholder="What needs to be done?"
            value={input}
            onChange={(ev) => {
                setInput(ev.target.value);
            }}
            onKeyDown={(ev) => {
                if (ev.key === 'Enter') {
                    addTodo();
                }
            }}
        />
    )

}
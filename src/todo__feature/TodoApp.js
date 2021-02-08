import React from "react";
import { useSelector } from "react-redux";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { addTodos, selectTodos } from './TodoAppSlice'


const TodoApp = () => {
    const todos = useSelector(selectTodos);

    return (
        <div className="todo-container">
            <TodoInput todoHandler={addTodos} />
            <hr/>
            <TodoList todos={todos} />
        </div>
    )
}

export default TodoApp;
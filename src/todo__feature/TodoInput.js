import React, {useState} from "react";
import {useDispatch} from "react-redux";

import './Todo.css';

const TodoInput = (props) => {
    const [todo, setTodo] = useState();
    const dispatch = useDispatch();
    return (
        <form className='todo-form' onSubmit={ (event) => {
            event.preventDefault();
            todo && dispatch(props.todoHandler(todo))
        }}>
            <textarea id="todoInput" className='todo-text-area' value={todo} onChange={ (e) => { setTodo(e.target.value)}} placeholder="Add your todo items"/>
            <button type="submit" className="todo-submit" disabled={!todo}>Add Todo</button>
        </form>
    )
};

export default TodoInput;
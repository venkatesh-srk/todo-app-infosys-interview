import React from "react";


function TodoList ({todos}) {
    return (
        <>
            <h3>Your todo list: {todos.length} items</h3>
            <ul className='todo-list'>
                { todos.map(todo => <li key={todo.id}> {todo.id}. {todo.text}</li>) }
            </ul>
        </>
    )
}


export default TodoList;
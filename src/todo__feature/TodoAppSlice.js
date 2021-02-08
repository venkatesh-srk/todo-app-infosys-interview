import { createSlice } from "@reduxjs/toolkit";


let todoId = 0;
export const getNewTodoID = () => ++todoId;


export const TodoAppSlice = createSlice({
    name: 'todo',
    initialState: [{
        id: getNewTodoID(),
        text: 'First Todo item.'
    }],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        }
    }
});


export const { addTodo } = TodoAppSlice.actions;

export const addTodos = todoText => dispatch => {
    /* Split text based on new line and add to todos */
    let todoTexts = todoText && todoText.split('\n');
    for(const todo of todoTexts){
        todo && dispatch(addTodo({ id: getNewTodoID(), text: todo }))
    }
}

export const selectTodos = state => state.todo;

export default TodoAppSlice.reducer;
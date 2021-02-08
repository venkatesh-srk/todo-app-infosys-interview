import { configureStore } from '@reduxjs/toolkit';

import TodoReducer from '../todo__feature/TodoAppSlice'

export default configureStore({
  reducer: {
    todo: TodoReducer
  }
});

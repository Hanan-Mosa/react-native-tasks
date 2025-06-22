import { configureStore } from '@reduxjs/toolkit';
import TodoSlice from './Slices/todo_slice';
const store = configureStore({
  reducer: {  
    todosState:TodoSlice.reducer
    }
});
export default store;
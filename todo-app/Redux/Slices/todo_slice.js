import { createSlice } from "@reduxjs/toolkit";

export const FilterationTypes ={
    ALL:"all",
    ACTIVE:"active",
    Done:"done"
};

const TodoSlice = createSlice({
    name:"todos",
    initialState:{
        todos:[],
        filter:FilterationTypes.ALL
    },
    reducers:{
        setTodos:(state , action)=>{
         const newTodos = action.payload;
         state.todos=newTodos;
        },
        addTodo:(state,action)=>{
            const newTodo = action.payload;
            state.todos.push(newTodo);
        },
        removeTodo:(state,action)=>{
            const id = action.payload;
         state.todos= state.todos.filter((todo)=>todo.id != id);
        },
        markAsCompleted:(state,action)=>{
            const id = action.payload;
            const todo = state.todos.find((todo)=>todo.id === id);
         if(todo){
            todo.completed=!todo.completed;
         }
        },
        updateFilterType:(state,action)=>{
            state.filter = action.payload;
        }

    }

});

export const {addTodo ,removeTodo,markAsCompleted,updateFilterType , setTodos} = TodoSlice.actions;
export default TodoSlice; 
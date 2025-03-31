import { createReducer, on } from "@ngrx/store";
import { TodoState } from "../models/todo.interface";
import { addTodo } from "./actions";


export const initialState: TodoState = {
    todos: [],
    error: null,
    status: 'pending',
  };

export const todoAppReducer = createReducer(
    initialState,
    on(addTodo, (state, { content }) => ({
      ...state,
      todos: [...state.todos, { id: Date.now().toString(), content: content }],
    }))
);
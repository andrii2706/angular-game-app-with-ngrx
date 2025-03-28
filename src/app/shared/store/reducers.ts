import { createReducer } from "@ngrx/store";
import { TodoState } from "../models/todo.interface";


export const initialState: TodoState = {
    todos: [],
    error: null | string,
    status: 'pending',
  };

export const todoAppReducer = createReducer(
    on()
)
export const gameReducer = createReducer(
    on()
)
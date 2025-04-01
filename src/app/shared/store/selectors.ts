import { createSelector } from "@ngrx/store";
import { TodoState } from "../models/todo.interface";
import { AppState } from "./app.state";


export const selectTodos = (state: AppState) => state.todos;
export const selectAllTodos = createSelector(
  selectTodos,
  (state: TodoState) => state?.todos
);
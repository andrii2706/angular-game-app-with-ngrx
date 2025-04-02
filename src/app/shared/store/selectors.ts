import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "../models/todo.interface";
import { AppState } from "./app.state";


export const selectTodosState = createFeatureSelector<TodoState>('todos');
export const selectAllTodos = createSelector(
    selectTodosState,
  (state: TodoState) => state.todos
)
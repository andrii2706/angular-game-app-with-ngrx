import { createAction, props } from "@ngrx/store";
import { Todo } from "../models/todo.interface";

export const addTodo = createAction('Add Todo task', props<{name : string, starttimeOfTask: string, endtimeOfTask: string, taskStatus:string}>());
export const loadTodos = createAction('Load Todo tasks', props<{status:string}>);
export const loadTodosSuccess = createAction('Load Todo tasks success', props<{todos: Todo[]}>());
export const loadTodosError = createAction('Load Todo tasks error',props<{error: string}>());


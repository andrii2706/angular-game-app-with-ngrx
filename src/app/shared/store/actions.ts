import { createAction, props } from "@ngrx/store";

export const addTodo = createAction('Add Todo task', props<{name : string, starttimeOfTask: string, endtimeOfTask: string, taskStatus:string}>());
export const loadTodos = createAction('Load Todo tasks', props<{name : string, starttimeOfTask: string, endtimeOfTask: string, taskStatus:string}>());
export const loadTodosSuccess = createAction('Load Todo tasks success');
export const loadTodosError = createAction('Load Todo tasks error');
export const getGamesFromBe = createAction ("Get game data", props<any>)
export const errorGames = createAction ("Error to get games")
export const succesGames = createAction ("Success get games")


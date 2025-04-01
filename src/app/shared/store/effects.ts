import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from "./app.state";
import { Store } from "@ngrx/store";
import { TodoService } from "../service/todo.service";
import { addTodo, loadTodos, loadTodosError, loadTodosSuccess } from "./actions";
import { catchError, from, map, of, switchMap, withLatestFrom } from "rxjs";
import { Todo } from "../models/todo.interface";
import { selectAllTodos } from "./selectors";

@Injectable()

export class TodoEffects {

    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private todoService: TodoService
    ){}
    loadTodos$ = createEffect(() => 
        this.actions$.pipe(ofType(loadTodos),
        switchMap(() => from(this.todoService.getTodos()).pipe(
            map((todos: Todo[]) => loadTodosSuccess({todos: todos})),
            catchError((error) => of(loadTodosError({ error })))
        ))
        ))
     saveTodos$ = createEffect(() => this.actions$.pipe(ofType(addTodo),  
     withLatestFrom(this.store.select(selectAllTodos)),
     switchMap(([action, todos]) => from(this.todoService.saveTodos(todos)))),  { dispatch: false })   
}   
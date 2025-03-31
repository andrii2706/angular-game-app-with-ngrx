import { createAction, props } from "@ngrx/store";

export const addTodo  = createAction('[TODO Added] Todo has been added',  props<{ content: string }>());
export const successAddTodo  = createAction('[TODO Success] Todo has been success added');
export const errorAddTodo  = createAction('[TODO Error] Todo has not been added');

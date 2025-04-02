import { Todo } from "../models/todo.interface";

export interface AppState {
    todos: Todo[];
    error: string | null;
    status: string;
  }
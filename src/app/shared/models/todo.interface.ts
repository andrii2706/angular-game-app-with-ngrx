export interface TodoState {
    todos: Todo[];
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
  }
  
 

  export interface Todo {
    nameOfTask: string;

  }
  
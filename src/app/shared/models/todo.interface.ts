export interface TodoState {
    todos: Todo[];
    error: string | null;
    status: 'pending' | 'loading' | 'error' | 'success';
  }
  
 
  export interface Todo {
    id: string;
    content: string;
  }
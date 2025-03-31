export interface TodoState {
    todos: Todo[];
    error: string | null;
    status: 'pending' | 'loading' | 'error' | 'success';
  }
  
 
  export interface Todo {
    id: string;
    content: {
      name: string;
      starttimeOfTask: string; endtimeOfTask: string; taskStatus:string
    };
  }
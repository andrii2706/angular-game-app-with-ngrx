export interface TodoState {
    todos: Todo[];
    error: string | null;
    status: string;
  }
  
 
  export interface Todo {
    id: string;
    content: {
      name: string;
      starttimeOfTask: string; endtimeOfTask: string; taskStatus:string
    };
  }
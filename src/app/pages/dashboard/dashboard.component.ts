import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ClearObservable } from '../../shared/clasess/ClearObservable';
import { StatusEnum } from '../../shared/enum/status.enum';
import { Store } from '@ngrx/store';
import { addTodo, loadTodos } from '../../shared/store/actions';
import { selectAllTodos } from '../../shared/store/selectors';
import { AppState } from '../../shared/store/app.state';
import { Todo } from '../../shared/models/todo.interface';

@Component({
  selector: 'app-dashboard',
  imports: [MatButtonModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent extends ClearObservable implements OnInit {
  
  todoForm: FormGroup
  allTodos: Todo[] = [];
 
  constructor(private store: Store<AppState>) {
      super();
  }

  allTodos$ = this.store.select(selectAllTodos);

  ngOnInit(): void {
    this.store.dispatch(loadTodos())

    this.initForm()
  }
  initForm(){
    this.todoForm = new FormGroup({
        nameOfTask: new FormControl("", Validators.required),
        starttimeOfTask: new FormControl("", Validators.required),
        endtimeOfTask: new FormControl("", Validators.required),
        taskStatus: new FormControl(StatusEnum.DRAFT_STATUS, Validators.required),
    })
  }
  clearForm() {
    this.todoForm.reset();
  }
  submitForm() {
    this.store.dispatch(addTodo({name: this.todoForm.value.nameOfTask, starttimeOfTask: this.todoForm.value.starttimeOfTask, endtimeOfTask: this.todoForm.value.endtimeOfTask, taskStatus: this.todoForm.value.taskStatus }))
  }
}

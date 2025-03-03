import { Component, OnInit } from '@angular/core';
import { ClearObservable } from '../../../shared/clasess/ClearObservable';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { StatusEnum } from '../../../shared/enum/status.enum';

@Component({
  selector: 'app-dashboard',
  imports: [MatButtonModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent extends ClearObservable implements OnInit {

  todoForm: FormGroup

  constructor() {
      super();
  }
  ngOnInit(): void {
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
    console.log(this.todoForm.value);
  }
}

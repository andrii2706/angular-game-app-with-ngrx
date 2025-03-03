import { Component, OnInit } from '@angular/core';
import { ClearObservable } from '../../../shared/clasess/ClearObservable';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent extends ClearObservable implements OnInit {
  constructor() {
      super();
  }
  ngOnInit(): void {
    
  }
  clearForm() {}
  submitForm() {}
}

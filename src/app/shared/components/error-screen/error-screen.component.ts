import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error-screen',
  templateUrl: './error-screen.component.html',
  styleUrls: ['./error-screen.component.scss']
})
export class ErrorScreenComponent implements OnInit {

  @Output() retryClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRetryClicked() {
    this.retryClicked.emit();
  }

}

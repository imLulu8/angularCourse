import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-signup',
  templateUrl: './alert-signup.component.html',
  styleUrls: ['./alert-signup.component.scss']
})
export class CustomAlertComponent {
  @Input() message: string = '';
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeAlert() {
    this.close.emit();
  }
}

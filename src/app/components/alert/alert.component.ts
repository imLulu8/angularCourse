import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class CustomAlertComponent {
  @Input() message: string = '';
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeAlert() {
    this.close.emit();
  }
}

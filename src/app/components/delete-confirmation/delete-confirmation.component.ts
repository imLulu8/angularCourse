import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent {
  @Output() confirm: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  confirmDelete() {
    this.confirm.emit();
  }

  cancelDelete() {
    this.cancel.emit();
  }
}

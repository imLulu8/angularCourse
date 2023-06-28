import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPostComponent } from '../modal-post/modal-post.component';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent {

  constructor(private dialog: MatDialog) {}

  openModalPost() {
    this.dialog.open(ModalPostComponent);
  }
}

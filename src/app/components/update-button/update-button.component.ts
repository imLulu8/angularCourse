
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPatchComponent } from '../modal-patch/modal-patch.component';

@Component({
  selector: 'app-update-button',
  templateUrl: './update-button.component.html',
  styleUrls: ['./update-button.component.scss']
})
export class UpdateButtonComponent {
  @Input() _id!: string; 

  constructor(private dialog: MatDialog) {}

  openModalPatch(_id: string) {
    const dialogRef = this.dialog.open(ModalPatchComponent, {
      data: { _id: this._id }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Gestisci l'evento di chiusura del dialogo, se necessario
    });
  }
}




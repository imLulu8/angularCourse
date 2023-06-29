
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiCharactersService } from 'src/app/services/api-characters.service';

@Component({
  selector: 'app-modal-patch',
  templateUrl: './modal-patch.component.html',
  styleUrls: ['./modal-patch.component.scss']
})
export class ModalPatchComponent {
  updatedCharacter: any = {};
  _id!: string;
  img?:string;
  name?: string;
  price?:number;
  category?: string;
  ability?: string;

  constructor(
    private dialogRef: MatDialogRef<ModalPatchComponent>,
    private apiService: ApiCharactersService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this._id = data._id;
    this.updatedCharacter = {
      _id: this._id
    };
    
    if (data.name !== '') {
      this.name = data.name;
      this.updatedCharacter.name = this.name;
    }
    
    if (data.img !== '') {
      this.img = data.img;
      this.updatedCharacter.img = this.img;
    }
    
    if (data.price !== '') {
      this.price = data.price;
      this.updatedCharacter.price = this.price;
    }
    
    if (data.category !== '') {
      this.category = data.category;
      this.updatedCharacter.category = this.category;
    }
    
    if (data.ability !== '') {
      this.ability = data.ability;
      this.updatedCharacter.ability = this.ability;
    }
    
  }
  

  updateCharacter() {
    if (this._id) {
      this.apiService.updateCharacter('http://localhost:3001/v1/characters/' + this._id, this.updatedCharacter)
        .subscribe((response:any) => {
          this.dialogRef.close();
        }, (error: any) => {
          console.error('Error updating character:', error);
        });
    }
  }
}






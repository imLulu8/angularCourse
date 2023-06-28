import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiCharactersService } from 'src/app/services/api-characters.service';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.scss']
})
export class ModalPostComponent {

  name?: string ;
  price?: number;
  img?: string;
  ability?: string;
  category?: string;

  constructor(
    public dialogRef: MatDialogRef<ModalPostComponent>,
    private apiService: ApiCharactersService
  ) {}

  saveCharacter() {
    const character = {
      name: this.name,
      price: this.price,
      img: this.img,
      ability: this.ability,
      category: this.category
    };

    this.apiService.addCharacter('http://localhost:3001/v1/characters', character)
      .subscribe((response:any) => {
        console.log('Character added:', response);
        this.dialogRef.close();
      }, (error:any) => {
        console.error('Error adding character:', error);
      });
  }
}

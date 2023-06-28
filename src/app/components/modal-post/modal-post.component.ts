import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiCharactersService } from 'src/app/services/api-characters.service';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.scss']
})
export class ModalPostComponent implements OnInit {

  modalform!: FormGroup

  name?: string ;
  price?: number;
  img?: string;
  ability?: string;
  category?: string;

  constructor(
    public dialogRef: MatDialogRef<ModalPostComponent>,
    private apiService: ApiCharactersService
  ) {}

  
  ngOnInit(): void {
    this.modalform = new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(0, Validators.required),
      img: new FormControl(null, Validators.required),
      ability: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
    })

  }

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

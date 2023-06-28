import { Component, OnInit } from '@angular/core';
import { ApiCharactersService } from 'src/app/services/api-characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: any ;

  constructor(private apiservice: ApiCharactersService){}

  ngOnInit(): void {
      this.apiservice.getCharacters('http://localhost:3001/v1/characters')
      .subscribe((data: any) => {
        console.log(data)
        this.characters = Object.values(data);
      })
  }



}

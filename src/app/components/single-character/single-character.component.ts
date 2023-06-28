import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiCharactersService } from 'src/app/services/api-characters.service';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.scss']
})
export class SingleCharacterComponent implements OnInit {
  _id!: string;
  character: any;

  constructor(
    private route: ActivatedRoute,
    private apiservice: ApiCharactersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get('_id')!;
      this.apiservice.getCharacters('http://localhost:3001/v1/characters/' + this._id)
        .subscribe((character: any) => {
          this.character = character;
        });
    });
  }

  deleteCharacter() {
    this.apiservice.deleteCharacter('http://localhost:3001/v1/characters/' + this._id)
      .subscribe(() => {
        console.log('Character deleted');
        this.router.navigate(['/characters']); // Reindirizza alla lista dei personaggi dopo l'eliminazione
      }, (error:any) => {
        console.error('Error deleting character:', error);
      });
  }

  // updateCharacter() {
  //   const updatedCharacter = { /* oggetto character con dati aggiornati */ };
  //   this.apiservice.updateCharacter('http://localhost:3001/v1/characters/' + this._id, updatedCharacter)
  //     .subscribe(() => {
  //       console.log('Character updated');
  //       // Esegui eventuali azioni aggiuntive dopo l'aggiornamento del personaggio
  //     }, error => {
  //       console.error('Error updating character:', error);
  //     });
  // }
  


}

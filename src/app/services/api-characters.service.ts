import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCharactersService {
  characters:any;

  constructor(private http: HttpClient) { }

  getCharacters(url: string){
   return this.http.get(url)
  }

  addCharacter(url:string, character: {}) {
    return this.http.post(url, character);
  }

  deleteCharacter(url: string) {
    return this.http.delete(url);
  }

  updateCharacter(url:string, character: {}){
    return this.http.patch(url, character)
  }
  
  

}

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiCharactersService } from 'src/app/services/api-characters.service';
import {  BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, AfterViewInit {
  isDrawerOpened: boolean = true;
  isMobile: boolean = false;
  characters: any ;
  


  //BrakpointObserver ci serve per gestire l'osservazione ai punti di breakpoint(mobile,tablet,desktop)
  constructor(private apiservice: ApiCharactersService, private breakpointObserver: BreakpointObserver){}

  ngOnInit(): void {
      this.apiservice.getCharacters('http://localhost:3001/v1/characters')
      .subscribe((data: any) => {
        console.log(data)
        this.characters = Object.values(data);
      })
  }

  ngAfterViewInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe((result:any) => {
        this.isMobile = result.matches;
      });
  }


  reopenDrawer() {
    this.isDrawerOpened = true;
  }


}

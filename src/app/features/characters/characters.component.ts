import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiCharactersService } from 'src/app/services/api-characters.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, AfterViewInit, AfterViewChecked {
  isDrawerOpened: boolean = true;
  isMobile: boolean = false;
  characters: any;
  disabledClose: boolean = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private apiservice: ApiCharactersService, 
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.isDrawerOpened = false;
    // this.disabledClose = !this.isMobile;
    this.apiservice.getCharacters('http://localhost:3001/v1/characters')
      .subscribe((data: any) => {
        console.log(data)
        this.characters = Object.values(data);
      });
  }

  ngAfterViewInit(): void {
    this.breakpointObserver.observe([Breakpoints.XSmall])
      .subscribe((result: any) => {
        this.isMobile = result.matches;
        this.disabledClose = !this.isMobile;
      });
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

 /*  ngAfterContentChecked() {
    this.cdr.detectChanges();
  } */

  reopenDrawer() {
    this.isDrawerOpened = true;
  }
}




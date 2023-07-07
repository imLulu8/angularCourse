import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AlertData } from '../models/alert';


@Injectable({
  providedIn: 'root'
})


export class SharedService {

    handleAlert = new BehaviorSubject<AlertData>({});

}

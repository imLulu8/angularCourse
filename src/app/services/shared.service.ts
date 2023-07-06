import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//TODO mettilo nel modello
export interface AlertData {
    message?: string;
    isVisible?: boolean;
    style?: 'primary' | 'secondary';
}

@Injectable({
  providedIn: 'root'
})

export class SharedService {

    handleAlert = new BehaviorSubject<AlertData>({});

}

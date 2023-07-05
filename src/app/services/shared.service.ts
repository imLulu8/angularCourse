import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface AlerData {
    message?: string;
    isVisible?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class SharedService {

    handleAlert = new BehaviorSubject<AlerData>({});

}

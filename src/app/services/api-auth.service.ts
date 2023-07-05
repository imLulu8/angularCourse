import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {
private apiUrl = 'http://localhost:3001/v1/auth';

  isLogged = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  signup(userData: any){
    return this.http.post(`${this.apiUrl}/signup`, userData)
  }

  validateUser(verify: string) {
    const url = `${this.apiUrl}/validate/${verify}`;
    return this.http.get(url);
  }

  signin(userData:any){
    return this.http.post(`${this.apiUrl}/login`, userData)
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  
  
}

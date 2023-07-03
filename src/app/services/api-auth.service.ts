import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {
private apiUrl = 'http://localhost:3001/v1/auth'

  constructor(private http: HttpClient) { }

  signup(userData: any){
    return this.http.post(`${this.apiUrl}/signup`, userData)
  }

  validateUser(verify: string) {
    console.log('verify', verify)
    const url = `${this.apiUrl}/validate/${verify}`;
    return this.http.get(url);
  }
  
}

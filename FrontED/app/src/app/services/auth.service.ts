import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }


  register(user: any){
   return this.http.post<any>(this.URL + '/register', user);
  }

  login(user:any){
   return this.http.post<any>(this.URL + '/login', user);
  }
}

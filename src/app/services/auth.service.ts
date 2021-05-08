import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  url= "https://localhost:44326/api/Auth"

  login(model){
    return this.http.post(this.url+'/signIn', model);
  }

  SignUp(model){
    return this.http.post(this.url+'/signup', model);
  }
}

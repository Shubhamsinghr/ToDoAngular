import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url = "https://localhost:44326/api/Auth";
  headers_object = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

  getUsers() {
    return this.http.get(this.url + '/getUsers', { headers: this.headers_object });
  }

  getRoles() {
    return this.http.get(this.url + '/getRoles', { headers: this.headers_object });
  }

  addRole(roleName) {
    return this.http.post(this.url + '/roles', {'RoleName': roleName},{ headers: this.headers_object });
  }

  assignRole(model) {
    return this.http.post(this.url + '/assignRole', model, { headers: this.headers_object });
  }
}

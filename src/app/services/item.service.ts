import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }
  url = "https://localhost:44326/api/Items";
  headers_object = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

  getItems() {
    return this.http.get(this.url + '/getItems', { headers: this.headers_object });
  }

  upsertItem(model) {
    return this.http.post(this.url + '/upsertItem', model, { headers: this.headers_object });
  }
}

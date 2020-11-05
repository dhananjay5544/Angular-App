import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiURL = 'http://localhost:5000/api/products';
  constructor(public http: HttpClient) {}

  getProducts() {
    return this.http.get(this.apiURL);
  }
}

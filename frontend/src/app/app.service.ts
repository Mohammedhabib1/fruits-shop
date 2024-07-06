import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  getProduct(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  postProduct(product: any): Observable<any> {
    return this.http.post<any>(`${apiUrl}/api/product`, product);
  }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${apiUrl}/api/products`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${apiUrl}/api/product/${id}`);
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(`${apiUrl}/api/product/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    // return this.http.delete<any>(`${apiUrl}/api/product/${id}`);
    return this.http.delete(`${apiUrl}/api/product/${id}`);
  }
}

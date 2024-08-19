import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const apiUrl = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor( private http: HttpClient) { }

  postData(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/api/order`, data);
  }

  getAllData(): Observable<any> {
    return this.http.get(`${apiUrl}/api/order`);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${apiUrl}/api/order/${id}`);
  }

  getOrder(id: number): Observable<any> {
    return this.http.get<any>(`${apiUrl}/${id}`);
  }
}





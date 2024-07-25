import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const apiUrl = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  postData(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/api/payment`, data);
  }
}

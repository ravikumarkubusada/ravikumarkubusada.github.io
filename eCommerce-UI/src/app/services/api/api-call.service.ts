import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  getApiCall(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  postApiCall(url: string, data: any): Observable<any> {
    return this.http.post<any>(url, data);
  }

  putApiCall(url: string, data: any): Observable<any> {
    return this.http.put<any>(url, data);
  }

  deleteApiCall(url: string): Observable<{}> {
    return this.http.delete(url);
  }
}

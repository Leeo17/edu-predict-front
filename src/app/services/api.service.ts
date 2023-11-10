import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(input: { email: string; password: string }) {
    const payload = new HttpParams().set('username', input.email).set('password', input.password);
    return this.http.post<any>(`${environment.api}/login`, payload);
  }
}

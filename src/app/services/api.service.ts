import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(input: { email: string; password: string }) {
    return this.http.post<any>(`${environment.api}/login`, { username: input.email, password: input.password });
  }
}

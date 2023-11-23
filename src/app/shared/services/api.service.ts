import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Analysis, Course, LoginResponse, User, UserInput, UserPassInput } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(input: { email: string; password: string }) {
    const payload = new HttpParams().set('username', input.email).set('password', input.password);
    return this.http.post<LoginResponse>(`${environment.api}/login`, payload);
  }

  createUser(input: UserInput) {
    return this.http.post<User>(`${environment.api}/user`, input);
  }

  createUserPassword(input: UserPassInput) {
    return this.http.post<any>(`${environment.api}/user/password`, input);
  }

  sendResetPasswordEmail(email: string) {
    return this.http.post<any>(`${environment.api}/user/password/email`, { email });
  }

  getAllUserAnalyses() {
    return this.http.get<Analysis[]>(`${environment.api}/analyses`);
  }

  getCourses(filter: string | null) {
    let payload: HttpParams | undefined;
    if (filter) payload = new HttpParams().set('course_filter', filter);

    return this.http.get<Course[]>(`${environment.api}/analysis/courses`, { params: payload });
  }

  deleteAnalysis(id: string) {
    return this.http.delete(`${environment.api}/analysis/${id}`);
  }
}

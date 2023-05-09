import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  appLogin(values: any) {
    return this.http.post(
      `http://localhost:3000/login`,
      { loginId: values.loginid, password: values.password },
      {
        withCredentials: true,
      }
    );
  }
}

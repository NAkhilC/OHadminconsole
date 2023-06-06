import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  appUser$ = new Subject();
  data$: any = new Subject();
  maxNot$: any = new Subject();
  baseUrl = 'http://localhost:3000';
  message$ = new Subject<any>();
  public maxNotifications: number = 0;
  constructor(private http: HttpClient, private router: Router) {}

  getUserInfo() {
    return this.http.get(`${this.baseUrl}/getUserInfo`, {
      withCredentials: true,
    });
  }

  deleteExpiedNotifications() {
    return this.http
      .get(`${this.baseUrl}/deleteExpiredNotifications`, {
        withCredentials: true,
      })
      .subscribe();
  }

  returnMaxNotifications() {
    return this.maxNotifications;
  }

  logout() {
    return this.http.get(`${this.baseUrl}/logout`, {
      withCredentials: true,
    });
  }

  getNotificationsForUser(values: any) {
    return this.http.post(
      `${this.baseUrl}/getNotificationsForUser`,
      { data: values },
      {
        withCredentials: true,
      }
    );
  }

  getNotificationMessage() {
    return this.http
      .get(`${this.baseUrl}/getNotificationdata`, {
        withCredentials: true,
      })
      .subscribe((val: any) => {
        this.maxNotifications = val.maxNotifications;
        this.data$.next(val.data);
        this.maxNot$.next(val.maxNotifications);
      });
  }

  returnUserInfo() {
    return this.appUser$.subscribe((val: any) => {
      return val;
    });
  }

  isActiveUser() {
    return this.http.get(`${this.baseUrl}/login`, {
      withCredentials: true,
    });
  }

  deleteNotification(values: any) {
    return this.http.post(
      `${this.baseUrl}/delete/notification`,
      { data: values },
      {
        withCredentials: true,
      }
    );
  }

  appLogin(values: any) {
    return this.http.post(
      `${this.baseUrl}/login`,
      { loginId: values.loginid, password: values.password },
      {
        withCredentials: true,
      }
    );
  }

  saveNotifications(values: any) {
    return this.http.post(
      `${this.baseUrl}/saveNotifications`,
      { data: values },
      {
        withCredentials: true,
      }
    );
  }
}

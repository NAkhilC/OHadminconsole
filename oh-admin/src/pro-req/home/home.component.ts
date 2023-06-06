import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/shared/services/http/http.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  alerts!: any[];
  messagesForUser!: any[];
  constructor(private router: Router, private httpService: HttpService) {}
  ngOnInit() {
    this.httpService.getNotificationsForUser({}).subscribe((res: any) => {
      if (res.status === 200) {
        this.httpService.appUser$.next(res);
        this.messagesForUser = res.data;
      } else {
        this.router.navigate(['']);
      }
    });
  }
  provreq() {
    this.router.navigate(['/pro-req']);
  }
  close(alert: any) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}

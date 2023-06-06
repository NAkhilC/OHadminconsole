import { Component } from '@angular/core';
import { HttpService } from 'src/shared/services/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'oh-admin';
  constructor(private httpService: HttpService) {}
  ngOnInit() {
    this.httpService.deleteExpiedNotifications();
  }
}

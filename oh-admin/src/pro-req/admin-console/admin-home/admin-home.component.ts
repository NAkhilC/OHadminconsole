import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/shared/services/http/http.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent {
  constructor(private router: Router, private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.isActiveUser().subscribe((val: any) => {
      this.httpService.appUser$.next(val);
    });
  }

  navigate(tolink: any) {
    this.router.navigate([`/${tolink}`]);
  }
}

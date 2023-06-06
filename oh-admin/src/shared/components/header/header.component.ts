import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { HttpService } from 'src/shared/services/http/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  sessionUser$!: Subject<any>;
  constructor(private httpService: HttpService, private router: Router) {}
  logout() {
    this.httpService.logout().subscribe((val) => {
      this.httpService.appUser$.next(null);
      this.httpService.data$.next(null);

      this.router.navigate([``]);
    });
  }
  ngOnInit() {
    if (this.httpService.appUser$) {
      this.sessionUser$ = this.httpService.appUser$;
    } else {
      this.router.navigate([``]);
    }
  }
}

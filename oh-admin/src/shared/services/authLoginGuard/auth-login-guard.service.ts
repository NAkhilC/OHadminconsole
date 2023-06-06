import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { HttpService } from '../http/http.service';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginGuardService implements CanActivate {
  userInfo: any;

  constructor(private router: Router, private httpService: HttpService) {
    this.httpService.appUser$.subscribe((val: any) => {
      this.userInfo = val;
    });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.httpService.getUserInfo().pipe(
      switchMap((res: any) => {
        this.httpService.appUser$.next(res);
        this.httpService.data$.next(res?.data);

        if (res?.user) {
          return of(true);
        } else {
          this.router.navigate(['/error']);
        }

        return of(res.user);
      })
    );
  }
}

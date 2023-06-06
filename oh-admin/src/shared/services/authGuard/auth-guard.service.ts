import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, delay, map, of, switchMap, takeUntil } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
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
        this.httpService.appUser$.next(res?.user);
        this.httpService.data$.next(res?.data);
        if (res.user?.role === 'admin' && res.ohInternalAdminsEnable) {
          return of(true);
        } else {
          this.router.navigate(['/error']);
        }

        return of(res.user.role === 'admin' && res.ohInternalAdminsEnable);
      })
    );
  }
}

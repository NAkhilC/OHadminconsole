import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from 'src/pro-req/admin-console/admin-home/admin-home.component';
import { HomeComponent } from 'src/pro-req/home/home.component';
import { LoginComponent } from 'src/pro-req/login/login.component';
import { AuthGuardService } from 'src/shared/services/authGuard/auth-guard.service';
import { NotificationsComponent } from 'src/pro-req/admin-console/notifications/notifications.component';
import { ErrorComponent } from 'src/pro-req/error/error.component';
import { ProReqFormComponent } from 'src/pro-req/pro-req-form/pro-req-form.component';
import { AuthLoginGuardService } from 'src/shared/services/authLoginGuard/auth-login-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'app-home',
    component: HomeComponent,
    canActivate: [AuthLoginGuardService],
  },
  {
    path: 'pro-req',
    component: ProReqFormComponent,
    canActivate: [AuthLoginGuardService],
  },
  {
    path: '',
    component: AdminHomeComponent,
    children: [
      {
        path: 'oh/admin',
        loadChildren: () =>
          import('../pro-req/admin-console/admin-console.module').then(
            (child) => child.AdminConsoleModule
          ),
        canActivate: [AuthGuardService],
      },
    ],
  },
  { path: 'error', component: ErrorComponent },
  {
    path: 'oh/admin/manage-notifications',
    component: NotificationsComponent,
    canActivate: [AuthLoginGuardService, AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/pro-req/home/home.component';
import { LoginComponent } from 'src/pro-req/login/login.component';
import { WelcomeComponent } from 'src/pro-req/welcome/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'admin', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

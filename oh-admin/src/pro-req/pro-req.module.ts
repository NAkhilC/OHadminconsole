import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProReqComponent } from './pro-req.component';
import { SharedModule } from 'src/shared/shared.module';
import { FormsService } from 'src/shared/services/form/forms.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomePageComponent } from './welcome/welcome-page/welcome-page.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent, ProReqComponent, WelcomePageComponent, WelcomeComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [LoginComponent, HomeComponent, ProReqComponent],
  providers: [FormsService],
})
export class ProReqModule {}

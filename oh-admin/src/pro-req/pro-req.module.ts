import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProReqComponent } from './pro-req.component';
import { SharedModule } from 'src/shared/shared.module';
import { FormsService } from 'src/shared/services/form/forms.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { AdminHomeComponent } from './admin-console/admin-home/admin-home.component';
import { NgbAlert, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorComponent } from './error/error.component';
import { ProReqFormComponent } from './pro-req-form/pro-req-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    ProReqComponent,
    WelcomeComponent,
    ErrorComponent,
    ProReqFormComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbAlert],
  exports: [LoginComponent, HomeComponent, ProReqComponent],
  providers: [FormsService],
})
export class ProReqModule {}

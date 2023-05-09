import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from 'src/shared/services/form/forms.service';
import { HttpService } from 'src/shared/services/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  appUser: any;
  constructor(
    private router: Router,
    private formBuilder: FormsService,
    private httpService: HttpService
  ) {
    this.loginForm = this.formBuilder.initLoginForm();
  }
  ngOnInit() {}

  login() {
    this.httpService
      .appLogin(this.loginForm.value)
      .subscribe((val) => (this.appUser = val));
  }
}
